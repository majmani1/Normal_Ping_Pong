
var infos_ball = {
    x: infos_tbale.width/2,
    y: infos_tbale.height / 2,
    width: infos_tbale.height  * 2 / 100,
    height: infos_tbale.height  * 20 / 100,
    radius: 10,
    move_x: "left",
    move_y: "stop",
    speed: 3,
    start_match: false
}
const ball = canvas.getContext("2d");






function replay(move_x)
{
    infos_ball.x = infos_tbale.width/2
    infos_ball.y = infos_tbale.height/2
    infos_ball.move_x = move_x
    infos_ball.move_y = "stop"
}

function move_left_right() {
    if (infos_ball.x - infos_ball.radius < 0)
        replay("right")
    else if (infos_ball.x + infos_ball.radius > infos_tbale.width)
        replay("left")
    //-------------------- tir kora player 1 ----------------------
    if (infos_ball.y <= infos_player1.y + infos_player1.height && infos_ball.y >= infos_player1.y && infos_ball.x - infos_ball.radius <= infos_player1.x + infos_player1.width)
    {
        if (infos_ball.y < infos_player1.y + infos_player1.height / 2)
            infos_ball.move_y = "up"
        else if (infos_ball.y > infos_player1.y + infos_player1.height - infos_player1.height / 2)
            infos_ball.move_y = "down"
        else
            infos_ball.move_y = "stop"
        if (infos_ball.move_x == "left")
            infos_ball.move_x = "right"
        else
            infos_ball.move_x = "left"
    }
    //-------------------- tir kora player 2 ----------------------
    if (infos_ball.y <= infos_player2.y + infos_player2.height && infos_ball.y >= infos_player2.y && infos_ball.x + infos_ball.radius >= infos_player2.x)
    {
        if (infos_ball.y <= infos_player2.y + infos_player2.height / 2)
            infos_ball.move_y = "up"
        else if (infos_ball.y >= infos_player2.y + infos_player2.height - infos_player2.height / 2)
            infos_ball.move_y = "down"
        else
            infos_ball.move_y = "stop"
        if (infos_ball.move_x == "left")
            infos_ball.move_x = "right"
        else
            infos_ball.move_x = "left"
    }

    {
        
        }
    if (infos_ball.move_x == "left")
        infos_ball.x -= infos_ball.speed
    if (infos_ball.move_x == "right")
        infos_ball.x += infos_ball.speed
}

function move_up_down() {
    if (infos_ball.y - infos_ball.radius < 0)
        infos_ball.move_y = "down"
    else if (infos_ball.y + infos_ball.radius > infos_tbale.height)
        infos_ball.move_y = "up"
    if (infos_ball.move_y == "up")
        infos_ball.y -= infos_ball.speed
    if (infos_ball.move_y == "down")
        infos_ball.y += infos_ball.speed
    

}

function draw_BAll()
{
    move_up_down()
    move_left_right()
    ball.beginPath();
    ball.arc(infos_ball.x , infos_ball.y , infos_ball.width, 0, 2 * Math.PI);
    ball.fillStyle = "red";
    ball.fill(); 
}



// var move_ball = setInterval(draw_BAll, 15);