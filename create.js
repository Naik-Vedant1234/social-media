document.getElementById("create-post-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const postContent = document.getElementById("post-content").value;
    const postImage = document.getElementById("post-image").files[0];

    if (postContent === "") {
        alert("Please enter the post content.");
        return;
    }
    window.location.href = "dashboard.html";
});
