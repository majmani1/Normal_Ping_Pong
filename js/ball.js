
infos_ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    move_x: "left",
    move_y: "stop",
    speed: 3,
    start_match: false
}
const ball = canvas.getContext("2d");



// hna ghadi idar lchrono dial match

// const text_chrono = canvas.getContext("2d");
// function print_text_chrono(y) {
//     console.log(y)
    
//     text_chrono.font = "50px Arial";
//     text_chrono.fillText(y,10,80);
// }

// var a = 5;
// let play_match
// play_match = setTimeout(() => {
//     if (a == 0)
//     {
//         infos_ball.start_match = true
//         clearTimeout(play_match)
//         return
//     }
//     a--;
//     print_text_chrono(a);
//   }, "1000");


function replay(move_x)
{
    infos_ball.x = canvas.width/2
    infos_ball.y = canvas.height/2
    infos_ball.move_x = move_x
    infos_ball.move_y = "stop"
}

function move_left_right() {
    if (infos_ball.x - infos_ball.radius < 0)
        replay("right")
    else if (infos_ball.x + infos_ball.radius > canvas.width)
        replay("left")
    //-------------------- tir kora player 1 ----------------------
    if (infos_ball.y <= infos_player1.y + infos_player1.height && infos_ball.y >= infos_player1.y && infos_ball.x - infos_ball.radius <= infos_player1.x + infos_player1.width)
    {
        if (infos_ball.y <= infos_player1.y + infos_player1.height / 2)
            infos_ball.move_y = "up"
        else if (infos_ball.y >= infos_player1.y + infos_player1.height - infos_player1.height / 2)
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
    else if (infos_ball.y + infos_ball.radius > canvas.height)
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
    ball.arc(infos_ball.x , infos_ball.y , 10, 0, 2 * Math.PI);
    ball.fillStyle = "red";
    ball.fill(); 
}



// var move_ball = setInterval(draw_BAll, 15);