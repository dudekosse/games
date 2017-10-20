function updateCoins(value) {
	var xhttp1 = new XMLHttpRequest();
	xhttp1.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
		}
	};
	var user = getCookie("username");
	xhttp1.open("POST", "http://localhost:8082/coins/" + user);
	xhttp1.setRequestHeader("Content-type", "application/json");
	xhttp1.send(user);
}
