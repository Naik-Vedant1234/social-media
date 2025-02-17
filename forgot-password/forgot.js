
const forgotPasswordForm = document.getElementById("forgot-password-form");
const otpStepForm = document.getElementById("otp-form");
const formContainer = document.getElementById("forgot-password-container");
const otpContainer = document.getElementById("otp-step");
const resetPass = document.getElementById("rst-pass");


let generatedotp = "";
forgotPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("reset-email").value;
    
    if (email) {
        generatedotp = Math.floor(Math.random()*10000 + 1000)
        // Real Otp is Sent
        alert("Password reset OTP has been sent to " + email + ": " + generatedotp);
        formContainer.style.display = "none";
        otpContainer.style.display = "block";
    } else {
        alert("Please enter a valid email address.");
    }
});

otpStepForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const otp = document.getElementById("otp").value;
    
    if (otp === generatedotp.toString()) {
        alert("OTP verified! You can now reset your password.");
        resetPass.style.display = "block";
        otpContainer.style.display = "none";
    } else {
        alert("Invalid OTP. Please try again.");
    }
});

resetPass.addEventListener("submit", function(e) {
    e.preventDefault();
    
    check();
});

function check(){
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if(password != ""){
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
    } else {
        window.location.href = "../sign-in/sign-in.html"; 
    }
    }else{
        alert("Fill the required contents")
    }
}



