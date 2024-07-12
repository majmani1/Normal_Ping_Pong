const canvas = document.querySelector(".table")
const tubeSocer1 = document.querySelector(".tubeSocer1")
const tubeSocer2 = document.querySelector(".tubeSocer2")

 var play_or_pause = "pause"

var infos_tbale = {
    
    width : window.innerWidth / 2.3,
    height : ( window.innerWidth / 2.3)/2,
}

var infos_player1 = {
    gapX : 10,
    x : 10,
    y : infos_tbale.height/2 - ((infos_tbale.height / 7)/2),
    width : infos_tbale.width/120,
    height: infos_tbale.height / 7,
    speed_move: infos_tbale.height / 250,
    score: 0,
    move: "stop",
   
}

var infos_player2 = {
    x : infos_tbale.width - infos_player1.width - 10,
    y : infos_tbale.height/2 - ((infos_tbale.height / 7)/2),
    width : infos_tbale.width/120,
    height: infos_tbale.height / 7,
    score: 0,
    move: "stop"
}

var move_player

canvas.width = infos_tbale.width
canvas.height = infos_tbale.height

const player1 = canvas.getContext("2d");
const player2 = canvas.getContext("2d");
// player1.fillStyle = "#02EB98";
// player2.fillStyle = "#02EB98";
player1.fillRect(infos_player1.x,infos_player1.y,infos_player1.width,infos_player1.height);
player2.fillRect(infos_player2.x, infos_player2.y, infos_player2.width, infos_player2.height);




let clicks = []
 var i = 0
document.addEventListener("keydown", function(key){

    // let borderTable = 1 * window.innerWidth / 100
    // console.log(infos_player1.y -borderTable + " eee  ")
    if (key.key == "w" && infos_player1.y   > 0) {
        if (clicks.find(clicks => clicks.letre == "w") == undefined)
            clicks.push({letre: "w"})

        infos_player1.move = "up"
    }
    else if (key.key == "s" &&  infos_player1.y + infos_player1.height < canvas.height)
    {
        if (clicks.find(clicks => clicks.letre == "s") == undefined)
            clicks.push({letre: "s"})

        infos_player1.move = "down"
         
    }

    else if ((key.key == "ArrowUp" || key.key == "PageUp") && infos_player2.y > 0)
    {
        if (clicks.find(clicks => clicks.letre == "up") == undefined)
            clicks.push({letre: "up"})

        infos_player2.move = "up"
    }
    else if ((key.key == "ArrowDown" || key.key == "PageDown") &&  infos_player2.y + infos_player2.height < canvas.height)
    {
        if (clicks.find(clicks => clicks.letre == "down") == undefined)
            clicks.push({letre: "down"})
        infos_player2.move = "down"
    }
})

document.addEventListener("keyup", function (key) {
    if (key.key == "w")
    {
        clicks.splice(clicks.findIndex(click => click.letre == "w"), 1);
        infos_player1.move =  "stop"
    }
    else if (key.key == "s")
    {
        clicks.splice(clicks.findIndex(click => click.letre == "s"), 1);
            infos_player1.move =  "stop"
         
    }
    if (key.key == "ArrowUp" || key.key == "PageUp")
        {
            
            clicks.splice(clicks.findIndex(click => click.letre == "up"), 1);
            infos_player1.move =  "stop"
        }
    else if (key.key == "ArrowDown" || key.key == "PageDown")
    {
        clicks.splice(clicks.findIndex(click => click.letre == "down"), 1);
        infos_player1.move = "stop"
    }
        // console.log(clicks.length )
})


function drawPlayer()
{
    if (play_or_pause == "pause")
        return
    for (let i = 0; i < clicks.length; i++)
    {
        if (clicks[i].letre == "w" && infos_player1.y > 0)
        {
            infos_player1.y -= infos_player1.speed_move
        }
        else if (clicks[i].letre == "s" && infos_player1.y + infos_player1.height < canvas.height)
        {
            infos_player1.y += infos_player1.speed_move
        }
        else if (clicks[i].letre == "up" && infos_player2.y > 0)
        {
            infos_player2.y -= infos_player1.speed_move
        }
        else if (clicks[i].letre == "down" && infos_player2.y + infos_player2.height < canvas.height)
        {
            infos_player2.y += infos_player1.speed_move
        }
    }
    // draw_BAll()
    ball.fillStyle = "#02EB98";
    player1.clearRect(0, 0, infos_tbale.width, infos_tbale.height);

   
    draw_BAll()
    
    player1.fillRect(infos_player1.x,infos_player1.y,infos_player1.width,infos_player1.height);
    player2.fillRect(infos_player2.x,infos_player2.y,infos_player2.width,infos_player2.height);
 
}
var move_player = setInterval(drawPlayer, 5);



// function printTextInTable(y)
// {
//     const ctx = canvas.getContext("2d");
    
//     ctx.font = "3vh Arial";
//     ctx.fillText(y,infos_tbale.width/2, infos_tbale.height/2);
// }

// var count = 5

// function printChono()
// {
//     if (count <= 0)
//         count = 5
//     count--
//     printTextInTable(count)
   
// }

// var chronoPlay =  window.setInterval(printChono, 1000);

