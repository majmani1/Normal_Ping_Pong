
var infos_ball = {
    x: infos_tbale.width/2,
    y: infos_tbale.height / 2,
    width: infos_tbale.height  * 2 / 120,
    height: infos_tbale.height  * 20 / 120,
    radius: 10,
    move_x: "left",
    move_y: "stop",
    speed: 0,
    speed_x: infos_tbale.width / 300,
    start_match: false,
    max_score: 5
}
const ball = canvas.getContext("2d");






function replay(move_x)
{
    if (move_x == "left")
    {
        infos_player1.score += 1
        document.querySelector(".result_player1").innerHTML = infos_player1.score;
        let percentage_win = infos_player1.score * 100/ infos_ball.max_score
        tubeSocer1.style.cssText = ` background: linear-gradient( 0deg, #02EB98 ${percentage_win}%, transparent 40%);`
    }
    else
    {
        infos_player2.score += 1
        document.querySelector(".result_player2").innerHTML = infos_player2.score;
        let percentage_win = infos_player2.score * 100/ infos_ball.max_score
        tubeSocer2.style.cssText = ` background: linear-gradient( 0deg, #02EB98 ${percentage_win}%, transparent 40%);`
    }
    infos_ball.x = infos_tbale.width/2
    infos_ball.y = infos_tbale.height / 2
    infos_player1.y = infos_tbale.height / 2 - ((infos_tbale.height / 7) / 2)
    infos_player2.y = infos_tbale.height / 2 - ((infos_tbale.height / 7) / 2)
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
        // console.log((infos_ball.y - infos_player1.y) / infos_player1.height) * 7 * 10
        infos_ball.speed = (infos_ball.y - infos_player1.y) / (infos_player1.height / 2) 
        if ((infos_ball.y - infos_player1.y) < infos_player1.height / 2)
        {
            infos_ball.speed += -1 
            infos_ball.move_y = "up"
        }
        else if ((infos_ball.y - infos_player1.y) > infos_player1.height - infos_player1.height / 2)
        {
            infos_ball.speed += -1
            
            infos_ball.move_y = "down"
        }
    

        if (infos_ball.move_x == "left")
            infos_ball.move_x = "right"
        else
            infos_ball.move_x = "left"
    }
    //-------------------- tir kora player 2 ----------------------
    if (infos_ball.y <= infos_player2.y + infos_player2.height && infos_ball.y >= infos_player2.y && infos_ball.x + infos_ball.radius >= infos_player2.x)
    {
        infos_ball.speed = (infos_ball.y - infos_player2.y) / (infos_player2.height/2) 
        if ((infos_ball.y - infos_player2.y) < infos_player2.height / 2)
            {
                infos_ball.speed += -1 
                infos_ball.move_y = "up"
            }
        else if ((infos_ball.y - infos_player2.y) > infos_player2.height - infos_player2.height / 2)
        {
            infos_ball.speed += -1
            
            infos_ball.move_y = "down"
        }
        if (infos_ball.move_x == "left")
            infos_ball.move_x = "right"
        else
            infos_ball.move_x = "left"
    }

    {
        
        }
    if (infos_ball.move_x == "left")
        infos_ball.x -= infos_ball.speed_x
    if (infos_ball.move_x == "right")
        infos_ball.x += infos_ball.speed_x
}

function move_up_down() {
    if (infos_ball.y - infos_ball.radius + infos_ball.speed < 0)
    {
        infos_ball.speed = -infos_ball.speed
        infos_ball.move_y = "down"
    }
    else if (infos_ball.y + infos_ball.radius + infos_ball.speed > infos_tbale.height)
    {
        infos_ball.move_y = "up"
        infos_ball.speed = -infos_ball.speed
        }
    if (infos_ball.move_y == "up")
        infos_ball.y += infos_ball.speed
    if (infos_ball.move_y == "down")
        infos_ball.y += infos_ball.speed
    

}

function draw_BAll()
{
    move_up_down()
    move_left_right()
    ball.beginPath();
    ball.arc(infos_ball.x , infos_ball.y , infos_ball.width, 0, 2 * Math.PI);
    ball.fillStyle = "#02EB98";
    ball.fill(); 
}



// var move_ball = setInterval(draw_BAll, 15);