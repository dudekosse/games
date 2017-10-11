function postGame(game,plays,wins,user){
	//var ent= document.getElementById("gamename").value;
	//var game = '{"name":"'+ent+'"}'; 
    var gameInfo = '{"typeGame:" '+game+',"timesPlayed:" '+plays+',"user:"'+user+'"highscore"'+wins+'}';

	var xhttp = new XMLHttpRequest();

	alert(gameInfo);
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 202) {
			document.getElementById("outputserver").innerHTML = this.responseText;
		}
	};

	xhttp.open("POST", "http://localhost:8082/gamepost", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(game);					

}