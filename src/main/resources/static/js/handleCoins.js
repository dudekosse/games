/**
 * 
 */
function getUserCoins() {
		userCoins = ;
	return userCoins();
}	

function getUserCoins(gameInfo) {
	var user = getUser(checkCookie());
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			return(JSON.parse(this.responseText));	
			return user.goldCoins
		}
	};
	xhttp.open("GET", "http://localhost:8082/userget" + curUser, true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();
}