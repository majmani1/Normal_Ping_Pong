

var game = document.querySelector(".game")
var all_scores = document.querySelector(".value_score");
var chose_score = document.querySelector(".chose_score");
var afichage_score = document.querySelector(".afichage_score");
var crown1 = document.querySelector(".crown1");
var crown2 = document.querySelector(".crown2");

addEventListener("resize", (event) => {
    //-------- table

    
    infos_tbale.width = window.innerWidth / 2.3
    infos_tbale.height = (window.innerWidth / 2.3) / 2

    infos_ball.speed_x = infos_tbale.width / 190
    infos_player1.speed_move = infos_tbale.height / 130
    canvas.width = infos_tbale.width
    canvas.height = infos_tbale.height
    //-------- player1
    infos_player1.x = 10,
    infos_player1.y = infos_tbale.height/2 - ((infos_tbale.height / 7)/2)
    infos_player1.width = infos_tbale.width/120
    infos_player1.height = infos_tbale.height / 7
    //-------- player2
    infos_player2.x = infos_tbale.width - infos_player1.width - 10
    infos_player2.y =  infos_tbale.height/2 - ((infos_tbale.height / 7)/2)
    infos_player2.width = infos_tbale.width / 120
    infos_player2.height = infos_tbale.height / 7
    //-------- ball
    infos_ball.x = infos_tbale.width / 2
    infos_ball.y = infos_tbale.height / 2
    infos_ball.width = infos_tbale.height  * 2 / 100
    infos_ball.speed_x = infos_tbale.width / 300
    
 });

// show div chat 
var text_emojie = document.querySelector(".text_emojie");
var chat = document.querySelector(".chat");
var show = false
var icon_chat = document.querySelector(".icon_chat");
var icon_close = document.querySelector(".icon_close")
 
function showChat() {
    
        text_emojie.style.visibility == "hidden" 
        icon_chat.style.visibility = "hidden"
        icon_close.style.visibility = "visible"
        // chat.style.visibility = "visible";
        text_emojie.style.visibility = "visible";
 
}


function showMessages() {
    chat.style.opacity = "1"

    chat.innerHTML = ""
   
 
    var message = ["Hello", "Hi", "Siuuuu", "How are you", "Fine", "And you", "Fine", "Thanks", "You are welcome", "Bye", "goodbye"];
    for (var i = 0; i < message.length; i++) {
        chat.innerHTML += `<label class="message">${message[i]}</label>`;
    }

}

var emojie = ["😉", "😂","😅","😮‍💨","😤","🤬","🫣","🫡","🤔","😭","🥲","😎", "🤝","🔥", "❤️","🏆"]

function showEmojies() {
    chat.style.opacity = "1"

    chat.innerHTML = ""
    show = true
 
    for (var i = 0; i < emojie.length; i++) {
        chat.innerHTML += `<span class="pic_emojies">${emojie[i]}</span>`;
        
    }
}

function hideChat()
{
    chat.style.opacity = "0"
    chat.innerHTML = "" 
    text_emojie.style.visibility = "hidden";
    icon_chat.style.visibility = "visible"
    icon_close.style.visibility = "hidden"
}

var all_emojies = document.querySelector(".chat");

all_emojies.addEventListener("click", function(event) {
    if (event.target.classList.contains("pic_emojies")) {
        showMessage.innerHTML = `<span class="messa">${event.target.textContent}</span>`
       
        showMessage.style.display = "block";
        hideChat()
        const myTimeout = setTimeout(timeShow_message, 4500);
    }
});


var showMessage = document.querySelector(".showMessage")

var all_messages = document.querySelector(".chat");

all_messages.addEventListener("click", function(event) {
    if (event.target.classList.contains("message")) {
        showMessage.innerHTML = `<span class="messa">${event.target.textContent}</span>`
        
        showMessage.style.display = "block";
        hideChat()
        const myTimeout = setTimeout(timeShow_message, 4500);
    }
});


function timeShow_message() {
    showMessage.style.display = "none";
   
}



var closeScore = document.querySelector(".closeScore")

closeScore.addEventListener("click", function(event){
    window.location.href = './home.html'
})





all_scores.addEventListener("click", function(event) {
    if (event.target.classList.contains("value")) {
        
        chose_score.style.display = "none"
        game.style.opacity = 1
        game.style.filter = "blur(0)"
        afichage_score.textContent= event.target.textContent
        infos_ball.max_score = event.target.textContent
        canvas.style.display = "block"
        tubeSocer1.style.display = "block"
        tubeSocer2.style.display = "block"
        // console.log(infos_ball.max_score)
    }
});



canvas.addEventListener('animationend', () => {
    // Apply box-shadow styles after the animation completes
    canvas.style.cssText = `box-shadow:
            0 0 0vw 0vw #02EB98,
            0 0 2vw 0.4vw #099e6a,
            inset 0 0 .1vw 0.01vw #02EB98,
            inset 0 0 .2vw 0.2vw #00ac70,
            inset 0 0 .25vw 0.2vw #027b50;
            display:block;`

    tubeSocer1.style.cssText  = `box-shadow:
    0 0 0vw 0vw #02EB98,
    0 0 2vw 0.4vw #099e6a,
    inset 0 0 .1vw 0.01vw #02EB98,
    inset 0 0 .2vw 0.2vw #00ac70,
    inset 0 0 .25vw 0.2vw #027b50;
    display:block;`
    tubeSocer2.style.cssText  = `box-shadow:
    0 0 0vw 0vw #02EB98,
    0 0 2vw 0.4vw #099e6a,
    inset 0 0 .1vw 0.01vw #02EB98,
    inset 0 0 .2vw 0.2vw #00ac70,
    inset 0 0 .25vw 0.2vw #027b50;
    display:block;`
      play_or_pause = "play"
   
});
