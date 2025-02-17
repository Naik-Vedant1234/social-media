document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.getElementById("profile-pic");
    const profileUpload = document.getElementById("profile-pic-upload");
    const usernameInput = document.getElementById("username");
    const bioInput = document.getElementById("bio");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const saveButton = document.getElementById("save-settings");

    profileUpload.addEventListener("change", function () {
        const file = profileUpload.files[0];
        if (file) {
            const input = new FileReader();
            input.onload = function (event) {
                profilePic.src = event.target.result;
            };
            input.readAsDataURL(file);
        }
    });
});
