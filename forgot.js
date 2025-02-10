
const forgotPasswordForm = document.getElementById("forgot-password-form");
const otpStepForm = document.getElementById("otp-form");
const formContainer = document.getElementById("forgot-password-container");
const otpContainer = document.getElementById("otp-step");


let otp = "";
forgotPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("reset-email").value;
    
    if (email) {
        otp = Math.floor(Math.random()*10000 + 1000)
        // Real Otp is Sent
        alert("Password reset OTP has been sent to " + email + ": " + otp);
        formContainer.style.display = "none";
        otpContainer.style.display = "block";
    } else {
        alert("Please enter a valid email address.");
    }
});

otpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const otp = document.getElementById("otp").value;
    
    if (otp === generatedOTP.toString()) {
        alert("OTP verified! You can now reset your password.");
        otpStepForm.innerHTML += `<a href="sign-in.html">Click Me!</a>`
    } else {
        alert("Invalid OTP. Please try again.");
    }
});



