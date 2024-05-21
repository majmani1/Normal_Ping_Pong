


const canvas = document.querySelector(".table")


var infos_tbale = {
    
    width : window.innerWidth / 2,
    height : ( window.innerWidth / 2)/2,
}

var infos_player1 = {
    x : 0,
    y : infos_tbale.height/2 - 37.5,
    width : infos_tbale.width/80,
    height : infos_tbale.height/4,
    move: "stop"
}

var infos_player2 = {
    x : infos_tbale.width - infos_player1.width,
    y : infos_tbale.height/2 - 37.5,
    width : infos_tbale.width/80,
    height : infos_tbale.height/4,
    move: "stop"
}

var move_player

canvas.width = infos_tbale.width
canvas.height = infos_tbale.height

const player1 = canvas.getContext("2d");
const player2 = canvas.getContext("2d");
player1.fillStyle = "red";
player2.fillStyle = "red";
player1.fillRect(infos_player1.x,infos_player1.y,infos_player1.width,infos_player1.height);
player2.fillRect(infos_player2.x,infos_player2.y,infos_player2.width,infos_player2.height);
 


let clicks = []
 var i = 0
document.addEventListener("keydown", function(key){
    // console.log(key.key)

    if (key.key == "w" && infos_player1.y > 0) {
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
    if (key.key == "w") {
     
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
        console.log(clicks.length )
})


function drawPlayer()
{
    for (let i = 0; i < clicks.length; i++)
    {
        if (clicks[i].letre == "w" && infos_player1.y > 0)
        {
            infos_player1.y -= 10
        }
        else if (clicks[i].letre == "s" && infos_player1.y + infos_player1.height < canvas.height)
        {
            infos_player1.y += 10
        }
        else if (clicks[i].letre == "up" && infos_player2.y > 0)
        {
            infos_player2.y -= 10
        }
        else if (clicks[i].letre == "down" && infos_player2.y + infos_player2.height < canvas.height)
        {
            infos_player2.y += 10
        }
    }
    draw_BAll()
    player1.clearRect(0, 0, canvas.width, canvas.height);

    draw_BAll()
    player1.fillRect(infos_player1.x,infos_player1.y,infos_player1.width,infos_player1.height);
    player2.fillRect(infos_player2.x,infos_player2.y,infos_player2.width,infos_player2.height);

}

 

var move_player = setInterval(drawPlayer, 15);
 
addEventListener("resize", (event) => {
    //-------- table
    infos_tbale.width = window.innerWidth / 2
    infos_tbale.height = (window.innerWidth / 2) / 2
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
    