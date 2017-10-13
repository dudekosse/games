function postGame(game,plays,wins,user){
    var gameInfo = '{"typeGame": "'+game+'","timesPlayed": "'+plays+'","highScore":"'+wins+'","user":"'+user+'"}';

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 202) {
			document.getElementById("outputserver").innerHTML = this.responseText;
		}
	};

	xhttp.open("POST", "http://localhost:8082/gamepost", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(gameInfo);					

}