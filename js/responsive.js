 
addEventListener("resize", (event) => {
    //-------- table

    
    infos_tbale.width = window.innerWidth / 1.5
    infos_tbale.height = (window.innerWidth / 1.5) / 2

    infos_ball.speed_x = infos_tbale.width / 190
    infos_player1.speed_move = infos_tbale.height / 130
    canvas.width = infos_tbale.width
    canvas.height = infos_tbale.height
    //-------- player1
    infos_player1.x = 0,
    infos_player1.y = infos_tbale.height/2 - 37.5
    infos_player1.width = infos_tbale.width/80
    infos_player1.height = infos_tbale.height / 4
    //-------- player2
    infos_player2.x = infos_tbale.width - infos_player1.width
    infos_player2.y = infos_tbale.height / 2 - 37.5
    infos_player2.width = infos_tbale.width / 80
    infos_player2.height = infos_tbale.height / 4
    //-------- ball
    infos_ball.x = infos_tbale.width / 2
    infos_ball.y = infos_tbale.height / 2
    infos_ball.width = infos_tbale.height  * 2 / 100
    
 });

// show div chat 
 
function showChat() {
    var chat = document.querySelector(".chat");
    if (chat.style.visibility == "hidden") {
        chat.style.visibility = "visible";
    } else {
        chat.style.visibility = "hidden";
    }
}


var chat = document.querySelector(".chat");

function showMessages() {
    console.log("showMessages")
    chat.innerHTML = ""
    chat.innerHTML = `
    <div class="text_emojie">
    <div class="text">
        <img onclick="showMessages()" src="img/chat.png" alt="" srcset="">

    </div>
    <div class="emojie">
        <img onclick="showEmojies()" src="img/proud.png" alt="" srcset="">
    </div>
    </div>`;

    var message = ["hello", "hi", "how are you", "fine", "and you", "fine", "thanks", "you are welcome", "bye", "goodbye"];
    for (var i = 0; i < message.length; i++) {
        chat.innerHTML += `<label class="message">${message[i]}</label>`;
    }

}
function showEmojies() {
    
    chat.innerHTML = `
    <div class="text_emojie">
    <div class="text">
        <img onclick="showMessages()" src="img/chat.png" alt="" srcset="">

    </div>
    <div class="emojie">
        <img onclick="showEmojies()" src="img/proud.png" alt="" srcset="">
    </div>
    </div>`;
    for (var i = 0; i < 10; i++) {
        
        chat.innerHTML += `<img class="pic_emojies" src="img/proud.png" alt="" srcset="">`;
    }
}
var showMessage = document.querySelector(".showMessage")

var all_messages = document.querySelector(".chat");

all_messages.addEventListener("click", function(event) {
    if (event.target.classList.contains("message")) {
        console.log("Clicked label text:", event.target.textContent);
        showMessage.innerHTML = `<span class="messa">${event.target.textContent}</span>`
        chat.style.display = "none";
        showMessage.style.display = "block";
        const myTimeout = setTimeout(timeShow_message, 1000);
    }
});


function timeShow_message() {
    showMessage.style.display = "none";
    chat.style.display = "block";
    showChat()
    chat.innerHTML = `
    <div class="text_emojie">
        <div class="text">
            <img onclick="showMessages()" src="img/chat.png" alt="" srcset="">

        </div>
        <div class="emojie">
            <img onclick="showEmojies()" src="img/proud.png" alt="" srcset="">
        </div>
    </div>`
}

 



