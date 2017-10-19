
function postGame(game,plays,wins,user){
    //curUser = checkCookie();
    var curUser = checkCookie().length > 0 ? checkCookie() : "anonymous";

    var xhttp = new XMLHttpRequest();
    
    gameInfo = '{"typeGame": "'+game+'","timesPlayed": "'+plays+'","highScore":"'+wins+'","user":"'+""+'"}';
    gameInfo =  JSON.parse(gameInfo);
    //getUserByCookie(curUser, gameInfo)
    
    var gameInfo = '{"typeGame": "'+game+'","timesPlayed": "'+plays+'","highScore":"'+wins+'","user":"'+curUser+'"}';

    console.log(gameInfo);
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//alert("in readystate obj: " + userObj);
		}
	};
	
	//userObj = getUserByCookie(user);
	xhttp.open("POST", "http://localhost:8082/gamepost" + curUser, true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(gameInfo);					
}

function getUserByCookie(curUser, gameInfo) {
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			gameInfo.user = JSON.parse(this.responseText);
			postGameAndUser(gameInfo)
		}
	};
	xhttp.open("GET", "http://localhost:8082/userget" + curUser, true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();
}


function postGameAndUser(gameInfo) {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			alert("in readystate obj: " + userObj);
		}
	};
	
	//userObj = getUserByCookie(user);
	var curUser = "bas";  //hardcode
	xhttp.open("POST", "http://localhost:8082/gamepost" + curUser, true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(gameInfo);
}