 
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

// print message in chat

var message = ["hello", "hi", "how are you", "fine", "and you", "fine", "thanks", "you are welcome", "bye", "goodbye"];
for (var i = 0; i < message.length; i++) {
    var chat = document.querySelector(".chat");
    var label = document.createElement("label");
    label.innerHTML = message[i];
    chat.appendChild(label);
}
// var chat = document.querySelector(".chat");
// var div = document.createElement("div");
// div.innerHTML = "hhh";
// chat.appendChild(div);

