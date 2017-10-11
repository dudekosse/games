alert("Werkt");
function getGame(){
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("outputserver").innerHTML = this.responseText;
  		}
	};
				
	xhttp.open("GET", "http://localhost:8082/game");
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();

}