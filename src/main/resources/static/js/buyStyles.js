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

function buyAnimatedStyle() {
	alert("Bought animated style");
	style = document.getElementById("style1").value;;
	style = document.getElementById("style2").value;;
	var xhttp1 = new XMLHttpRequest();
	xhttp1.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
		}
	};
	var user = getCookie("username");
	xhttp1.open("GET", "http://localhost:8082/animatedstyle/" + user + "/" + style1 + "/" + style2, true);
	xhttp1.setRequestHeader("Content-type", "application/json");
	xhttp1.send();
}