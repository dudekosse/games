function buyCoins() {
	coins = document.getElementById("coins").value;;
	var xhttp1 = new XMLHttpRequest();
	xhttp1.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
		}
	};
	var user = getCookie("username");
	xhttp1.open("GET", "http://localhost:8082/coins/" + user + "/" + coins, true);
	xhttp1.setRequestHeader("Content-type", "application/json");
	xhttp1.send();
}
