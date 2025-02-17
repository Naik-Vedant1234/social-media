document.addEventListener("DOMContentLoaded", function () {
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
    }, 1000);

    // Notification Panel
    const notifBtn = document.querySelector(".notif-btn");
    const notifPanel = document.querySelector(".notification-panel");
    const closeNotif = document.querySelector(".close-notif");

    notifBtn.addEventListener("click", function () {
        notifPanel.style.display = "block";
    });

    closeNotif.addEventListener("click", function () {
        notifPanel.style.display = "none";
    });

    
});

document.addEventListener("DOMContentLoaded", function () {
    // Chatbot Elements
    const chatBot = document.querySelector(".chatbot");
    const chatHeader = document.querySelector(".open_chatbot");
    const closeChat = document.querySelector(".close-chat");
    const chatInput = document.querySelector("#chat-input");
    const sendButton = document.querySelector(".send-message");
    const chatMessages = document.querySelector(".messages1");

    // Show Chatbot
    chatHeader.addEventListener("click", function () {
        chatBot.style.display = "flex";
    });

    // Close Chatbot
    closeChat.addEventListener("click", function () {
        chatBot.style.display = "none";
    });

    // Send Message when clicking "Send"
    sendButton.addEventListener("click", function () {
        sendMessage();
    });

    // Send Message when pressing "Enter"
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        let userText = chatInput.value.trim();
        if (userText === "") return; // Prevent empty messages

        // Create user message
        let userMessage = document.createElement("div");
        userMessage.classList.add("user-message");
        userMessage.textContent = userText;

        // Append to chat
        chatMessages.appendChild(userMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to latest message

        // Clear input field
        chatInput.value = "";

        // Generate bot response after 1 second
        setTimeout(() => {
            let botMessage = document.createElement("div");
            botMessage.classList.add("bot-message");
            botMessage.textContent = getBotResponse(userText);

            chatMessages.appendChild(botMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to latest message
        }, 1000);
    }

    function getBotResponse(input) {
        input = input.toLowerCase();
        if (input.includes("hello") || input.includes("hi")) {
            return "Hi there! How can I assist you?";
        } else if (input.includes("how are you")) {
            return "I'm just a bot, but I'm doing great! How about you?";
        } else if (input.includes("your name")) {
            return "I'm VITBOT, your AI assistant!";
        } else if (input.includes("help")) {
            return "Sure! What do you need help with?";
        } else {
            return "I'm not sure I understand. Can you rephrase that?";
        }
    }
});


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


