function postGame(game,plays,wins,user){
    curUser = checkCookie();
    console.log(game)
    var xhttp = new XMLHttpRequest();
    
    gameInfo = '{"typeGame": "'+game+'","timesPlayed": "'+plays+'","score":"'+wins+'","user":"'+""+'"}';
    gameInfo =  JSON.parse(gameInfo);
    getUserByCookie(curUser, gameInfo)			
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
		}
	};
	
	xhttp.open("POST", "http://localhost:8082/gamepost", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(JSON.stringify(gameInfo));
}