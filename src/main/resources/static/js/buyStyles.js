function buySimpleColor() {
	alert("Bought simple color");
	color = document.getElementById("color").value;;
	var xhttp1 = new XMLHttpRequest();
	xhttp1.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
		}
	};
	var user = getCookie("username");
	xhttp1.open("GET", "http://localhost:8082/simplecolor/" + user + "/" + color, true);
	xhttp1.setRequestHeader("Content-type", "application/json");
	xhttp1.send();
}

function buySimpleStyle() {
	alert("Bought simple style");
	style = document.getElementById("style").value;;
	var xhttp1 = new XMLHttpRequest();
	xhttp1.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
		}
	};
	var user = getCookie("username");
	xhttp1.open("GET", "http://localhost:8082/simplestyle/" + user + "/" + style, true);
	xhttp1.setRequestHeader("Content-type", "application/json");
	xhttp1.send();
}

function buyFancyColor() {
	alert("Bought fancy color");
	color = document.getElementById("fancy").value;;
	var xhttp1 = new XMLHttpRequest();
	xhttp1.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
		}
	};
	var user = getCookie("username");
	xhttp1.open("GET", "http://localhost:8082/fancycolor/" + user + "/" + color, true);
	xhttp1.setRequestHeader("Content-type", "application/json");
	xhttp1.send();
}

function buyEffect() {
	alert("Bought effect");
	effect = document.getElementById("effect").value;;
	var xhttp1 = new XMLHttpRequest();
	xhttp1.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
		}
	};
	var user = getCookie("username");
	xhttp1.open("GET", "http://localhost:8082/effect/" + user + "/" + effect, true);
	xhttp1.setRequestHeader("Content-type", "application/json");
	xhttp1.send();
}