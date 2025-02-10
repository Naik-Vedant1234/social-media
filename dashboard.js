
onLoad();

function onLoad(){
    displayHome();
    loadMessage();
}

function displayHome(){
    let content = document.querySelector('.content');
    
    let innerHtml = ``;

    posts.forEach(post => {
        innerHtml += `<div class="post">
                        <div class="head">
                            <div class="profile1">
                                ${post.pr}
                            </div>
                            <div class="profile_name">
                                ${post.name}
                            </div>
                            <div class="three_dots">
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <div class="image">
                            <img src="" alt="${post.image}">
                        </div>
                        <div class="description">
                            ${post.description}
                        </div>
                        <div class="option">
                            <div class="like">
                                <i class="fa-solid fa-heart heart"></i><span class="like_count">0</span>
                            </div>
                            <div class="comment">
                                <i class="fa-solid fa-comment"></i> <span class="comment_count">0</span>
                            </div>
                            <div class="share">
                                <i class="fa-solid fa-share"></i><span class="share_count">0</span>
                            </div>
                        </div>
                    </div>
                    <br>`;

    });

    content.innerHTML = innerHtml;
}

function loadMessage(){
    let messageContent = document.querySelector('.message_container');

    let innerHtml = ``;
    messages.forEach(message => {
        innerHtml += `
        <div class="message_content">
            <div class="profile1">
                    ${message.profile}
                </div>
                <div class="profile_name">
                    ${message.name}
                </div>
                <div class="dot">
                    .
                </div>
                </div>`
    });

    messageContent.innerHTML = innerHtml;
}

let dark = false; 

document.querySelector('.dark_mode_icon').addEventListener('click', function() {
    let body = document.querySelector("body");
    
    if(dark) {
        body.classList.remove("dark");
        dark = false;
    } else {
        body.classList.add("dark");
        dark = true;
    }
    
});

let likeBtn = document.querySelector(".like");
let commentBtn = document.querySelector(".comment");
let shareBtn = document.querySelector(".share");

let heart = document.querySelector(".heart");

let likeCount = document.querySelector(".like_count");
let commentCount = document.querySelector(".comment_count");
let shareCount = document.querySelector(".share_count");
let likes = 0;
let comments = 0;
let share = 0;

likeBtn.addEventListener("click",()=>{
    likeBtn.classList.toggle(".liked");
    if(likeBtn.classList.contains(".liked")){
        likes++;
    }else{
        likes--;
    }
    likeCount.innerText = likes;
});
commentBtn.addEventListener("click",()=>{
    comments++;
    commentCount.innerText = comments;
});
shareBtn.addEventListener("click",()=>{
    share++;
    shareCount.innerText = share;
});