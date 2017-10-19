function buyCoins() {
	var goldcoins = document.getElementById("coins").value;
	alert(goldcoins);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 202) {
			test = this.responseText;
			test2 = test.split(",");
		}
	}
}
