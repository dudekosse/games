var bocanvas = document.getElementById("breakoutCanvas");
var boctx = bocanvas.getContext("2d");
var ballRadius = 10;
var x = bocanvas.width/2;
var y = bocanvas.height-30;
var dx = 6;
var dy = -6;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (bocanvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 10;
var brickColumnCount = 5;
var brickWidth = 35;
var brickHeight = 15;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 0;
var boscore = 0;
var lives = 3;
var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
function mouseMoveHandler(e) {
    var relativeX = e.clientX - bocanvas.offsetLeft;
    if(relativeX > 0 && relativeX < bocanvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    boscore++;
                    if(boscore == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATS!");
                        postGame("BREAKOUT",1,boscore,"TEST")
                    }
                }
            }
        }
    }
}
function drawBall() {
    boctx.beginPath();
    boctx.arc(x, y, ballRadius, 0, Math.PI*2);
    boctx.fillStyle = "#0095DD";
    boctx.fill();
    boctx.closePath();
}
function drawPaddle() {
    boctx.beginPath();
    boctx.rect(paddleX, bocanvas.height-paddleHeight, paddleWidth, paddleHeight);
    boctx.fillStyle = "#0095DD";
    boctx.fill();
    boctx.closePath();
}
function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                boctx.beginPath();
                boctx.rect(brickX, brickY, brickWidth, brickHeight);
                boctx.fillStyle = "#0095DD";
                boctx.fill();
                boctx.closePath();
            }
        }
    }
}
function drawScore() {
    boctx.font = "16px Arial";
    boctx.fillStyle = "#0095DD";
    boctx.fillText("Score: "+boscore, 8, 20);
}
function drawLives() {
    boctx.font = "16px Arial";
    boctx.fillStyle = "#0095DD";
    boctx.fillText("Lives: "+lives, bocanvas.width-65, 20);
}
function draw1() {
    boctx.clearRect(0, 0, bocanvas.width, bocanvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    
    
    
    if(x + dx > bocanvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > bocanvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--;
            if(!lives) {
                console.log("GAME OVER");
                postGame("BREAKOUT",1,boscore,"TEST")
               // document.location.reload();
            }
            else {
                x = bocanvas.width/2;
                y = bocanvas.height-30;
                dx = 6;
                dy = -6;
                paddleX = (bocanvas.width-paddleWidth)/2;
            }
        }
    }
    if(rightPressed && paddleX < bocanvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    x += dx;
    y += dy;
    requestAnimationFrame(draw1);
}