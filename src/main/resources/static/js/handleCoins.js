/**
 * 
 */
function getUserCoins() {
	var user = getUser(checkCookie());
	userCoins = user.goldCoins;
	return userCoins();
}	