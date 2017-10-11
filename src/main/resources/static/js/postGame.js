alert("Werkt");
function postGame(){
	var ent= document.getElementById("gamename").value;
	var game = '{"name":"'+ent+'"}'; 
    var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 202) {
			document.getElementById("outputserver").innerHTML = this.responseText;
		}
	};

	xhttp.open("POST", "http://localhost:8082/gamepost", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(game);					

}