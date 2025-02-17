let signUp = document.querySelector(".sign-up-form");

signUp.addEventListener("submit", function(e) {
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
