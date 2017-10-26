
var mycanvas = document.getElementById('snakeCanvas');
var ctx1 = mycanvas.getContext('2d');

var snakeSize = 10; 
var w = 350;
var h = 350;
var snakeScore = 0;
var snake;
var snakeSize = 10;
var food;

var drawModule = (function () { 

	  var bodySnake = function(x, y) {
	        ctx1.fillStyle = 'green';
	        ctx1.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
	        ctx1.strokeStyle = 'darkgreen';
	        ctx1.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
	  }

	  var pizza = function(x, y) {
	        ctx1.fillStyle = 'yellow';
	        ctx1.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
	        ctx1.fillStyle = 'red';
	        ctx1.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
	  }

	  var scoreText = function() {
	    var score_text = "Score: " + snakeScore;
	    ctx1.fillStyle = 'blue';
	    ctx1.fillText(score_text, 145, h-5);
	  }

	  var drawSnake = function() {
	      var length = 4;
	      snake = [];
	      for (var i = length-1; i>=0; i--) {
	          snake.push({x:i, y:0});
	      }  
	  }
	    
	  var paint = function(){
	      ctx1.fillStyle = 'lightgrey';
	      ctx1.fillRect(0, 0, w, h);
	      ctx1.strokeStyle = 'black';
	      ctx1.strokeRect(0, 0, w, h);

	      btn.setAttribute('disabled', true);

	      var snakeX = snake[0].x;
	      var snakeY = snake[0].y;

	      if (direction == 'right') { 
	        snakeX++; }
	      else if (direction == 'left') { 
	        snakeX--; }
	      else if (direction == 'up') { 
	        snakeY--; 
	      } else if(direction == 'down') { 
	        snakeY++; }

	      if (snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || checkCollision(snakeX, snakeY, snake)) {
	          //restart game
	    	  alert("you lost");
	    	  postGame("SNAKE",1,snakeScore,"TEST")
	          btn.removeAttribute('disabled', true);

	          ctx1.clearRect(0,0,w,h);
	          gameloop = clearInterval(gameloop);
	          return;          
	        }
	        
	        if(snakeX == food.x && snakeY == food.y) {
	          var tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
	          snakeScore ++;
	          
	          createFood(); //Create new food
	        } else {
	          var tail = snake.pop(); //pops out the last cell
	          tail.x = snakeX; 
	          tail.y = snakeY;
	        }
	        //The snake can now eat the food.
	        snake.unshift(tail); //puts back the tail as the first cell

	        for(var i = 0; i < snake.length; i++) {
	          bodySnake(snake[i].x, snake[i].y);
	        } 
	        
	        pizza(food.x, food.y); 
	        scoreText();
	  }

	  var createFood = function() {
	      food = {
	        x: Math.floor((Math.random() * 30) + 1),
	        y: Math.floor((Math.random() * 30) + 1)
	      }

	      for (var i=0; i>snake.length; i++) {
	        var snakeX = snake[i].x;
	        var snakeY = snake[i].y;
	      
	        if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
	          food.x = Math.floor((Math.random() * 30) + 1);
	          food.y = Math.floor((Math.random() * 30) + 1);
	        }
	      }
	  }

	  var checkCollision = function(x, y, array) {
	      for(var i = 0; i < array.length; i++) {
	        if(array[i].x === x && array[i].y === y)
	        return true;
	      } 
	      return false;
	  }

	  var init = function(){
	      direction = 'down';
	      drawSnake();
	      createFood();
	      gameloop = setInterval(paint, 80);
	  }


	    return {
	      init : init
	    };

	    
	}());

(function (window, document, drawModule, undefined) {

	var btn = document.getElementById('btn');
	btn.addEventListener("click", function(){ drawModule.init();});
		document.onkeydown = function(event) {

	        keyCode = window.event.keyCode; 
	        keyCode = event.keyCode;

	        switch(keyCode) {
	        
	        case 37: 
	          if (direction != 'right') {
	            direction = 'left';
	          }
	          console.log('left'); 
	          break;

	        case 39:
	          if (direction != 'left') {
	          direction = 'right';
	          console.log('right');
	          }
	          break;

	        case 38:
	          if (direction != 'down') {
	          direction = 'up';
	          console.log('up');
	          }
	          break;

	        case 40:
	          if (direction != 'up') {
	          direction = 'down';
	          console.log('down');
	          }
	          break;
	          }
	      }
	})(window, document, drawModule);