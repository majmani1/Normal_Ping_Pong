 
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
    var text_emojie = document.querySelector(".text_emojie");
    if (text_emojie.style.visibility == "hidden") {
        // chat.style.visibility = "visible";
        text_emojie.style.visibility = "visible";
    } else {
        text_emojie.style.visibility = "hidden";
        chat.style.visibility = "hidden";
    }
}


var chat = document.querySelector(".chat");

function showMessages() {
    console.log("showMessages")
    chat.innerHTML = ""
   
    if (chat.style.visibility == "hidden") {
        chat.style.visibility = "visible";
     
    } else {
        chat.style.visibility = "hidden";
     
    }
    var message = ["Hello", "Hi", "Siuuuu", "How are you", "Fine", "And you", "Fine", "Thanks", "You are welcome", "Bye", "goodbye"];
    for (var i = 0; i < message.length; i++) {
        chat.innerHTML += `<label class="message">${message[i]}</label>`;
    }

}

var emojie = ["😉", "😂","😅","😮‍💨","😤","🤬","🫣","🫡","🤔","😭","🥲","😎", "🤝","🔥", "❤️","🏆"]

function showEmojies() {
    chat.innerHTML = ""
    
    if (chat.style.visibility == "hidden") {
        chat.style.visibility = "visible";
     
    } else {
        chat.style.visibility = "hidden";
     
    }
    for (var i = 0; i < emojie.length; i++) {
        chat.innerHTML += `<span class="pic_emojies">${emojie[i]}</span>`;
        
    }
}

var all_emojies = document.querySelector(".chat");

all_emojies.addEventListener("click", function(event) {
    if (event.target.classList.contains("pic_emojies")) {
        console.log("Clicked label text:", event.target.textContent);
        showMessage.innerHTML = `<span class="messa">${event.target.textContent}</span>`
        chat.style.display = "none";
        showMessage.style.display = "block";
        const myTimeout = setTimeout(timeShow_message, 4500);
    }
});


var showMessage = document.querySelector(".showMessage")

var all_messages = document.querySelector(".chat");

all_messages.addEventListener("click", function(event) {
    if (event.target.classList.contains("message")) {
        console.log("Clicked label text:", event.target.textContent);
        showMessage.innerHTML = `<span class="messa">${event.target.textContent}</span>`
        chat.style.display = "none";
        showMessage.style.display = "block";
        const myTimeout = setTimeout(timeShow_message, 4500);
    }
});


function timeShow_message() {
    showMessage.style.display = "none";
    chat.style.display = "block";
    if (chat.style.visibility == "hidden") {
        chat.style.visibility = "visible";
     
    } else {
        chat.style.visibility = "hidden";
     
    }
}

 



