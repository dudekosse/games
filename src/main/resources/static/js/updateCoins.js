function updateCoins() {
	var xhttp1 = new XMLHttpRequest();
	console.log("moi");
	xhttp1.onreadystatechange = function() {
		console.log("hello");
		if (this.readyState == 4 && this.status == 200) {
			console.log("hoi");
			newCoins = document.getElementById("coins").value;
			alert(newCoins);
 
			//verwerk();
		}
		alert(newCoins);
	};
//	var gebruiker = getCookie("username");
//	var redirect = "http://localhost:8082/saldo/"+gebruiker;
//	xhttp1.open("GET", redirect);
//	xhttp1.setRequestHeader("Content-type", "application/json");
//	xhttp1.send();
}
