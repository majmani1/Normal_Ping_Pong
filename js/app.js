


const canvas = document.querySelector(".table")
console.log(canvas.height)


var infos_player1 = {
    x : 10,
    y : 200,
    width : 15,
    height : 75,
    move: "stop"
}

var infos_player2 = {
    x : 780,
    y : 200,
    width : 15,
    height : 75,
    move: "stop"
}

var move_player


const player1 = canvas.getContext("2d");
const player2 = canvas.getContext("2d");
player1.fillStyle = "red";
player2.fillStyle = "red";
player1.fillRect(infos_player1.x,infos_player1.y,infos_player1.width,infos_player1.height);
player2.fillRect(infos_player2.x,infos_player2.y,infos_player2.width,infos_player2.height);
 
// player1.clearRect(0, 0, canvas.width, canvas.height);
 
document.addEventListener("keydown", function(key){
    console.log(key.key)

    if (key.key == "w" && infos_player1.y > 0)
    {
        infos_player1.move = "up"
        infos_player1.y -= 10
    }
    else if (key.key == "s" &&  infos_player1.y + infos_player1.height < canvas.height)
    {
        infos_player1.y += 10
        infos_player1.move = "down"
         
    }

    else if (key.key == "ArrowUp" && infos_player2.y > 0)
    {
        infos_player2.move = "up"
        infos_player2.y -= 10
    }
    else if (key.key == "ArrowDown" &&  infos_player2.y + infos_player2.height < canvas.height)
    {
        infos_player2.y += 10
        infos_player2.move = "down"
    }
})

document.addEventListener("keyup", function(key){
    console.log(key.key)

    if (key.key == "ArrowUp")
        infos_player1.move =  "stop"
    else if (key.key == "ArrowDown")
        infos_player1.move = "stop"
})


function drawPlayer()
{
    if (infos_player1.move == "stop" && infos_player2.move == "stop")
        return
    player1.clearRect(0, 0, canvas.width, canvas.height);
    // player2.clearRect(0, 0, canvas.width, canvas.height);
    player1.fillRect(infos_player1.x,infos_player1.y,infos_player1.width,infos_player1.height);

    player2.fillRect(infos_player2.x,infos_player2.y,infos_player2.width,infos_player2.height);

}

 

 var move_player = setInterval(drawPlayer, 15);