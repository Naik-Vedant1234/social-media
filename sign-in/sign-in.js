let signIn = document.querySelector(".sign-in-form")

signIn.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email && password) {
        window.location.href = "../dashboard/dashboard.html";
    } else {
        alert("Please fill in both fields.");
    }
});
