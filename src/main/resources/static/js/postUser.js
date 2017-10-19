function calcAge(datestring) {
	var today = new Date();
    var dateofbirth = new Date(datestring);
    var years = today.getFullYear() - dateofbirth.getFullYear();
    var months = today.getMonth() - dateofbirth.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < dateofbirth.getDate())) {
        years--;
    }
    return years;
}

function postUser(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var day = document.getElementById("day").value;
	var month = document.getElementById("month").value;
	var year = document.getElementById("year").value;
	var datestring = String(month)+"-"+String(day)+"-"+String(year);
	var age = calcAge(datestring);
	var country = document.getElementById("country").value;
	
	var user = '{"username": "'+username+'","password": "'+password+'","age":"'+ age +'","country":"'+country+'"}';

	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 202) {
			document.getElementById("outputserver").innerHTML = this.responseText;
		}
	};
	xhttp.open("POST", "http://localhost:8082/registerpost", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(user);	
}



//function buyCoins() {
//	var goldcoins = document.getElementById("coins").value;
//	var curUser = checkCookie();
//	alert(curUser);
//	var user = getCookieOfUser(curUser);
//}
//
//function getCookieOfUser(curUser) {
//	var xhttp = new XMLHttpRequest();
//	alert(curUser);
//	
//	xhttp.onreadystatechange = function() {
//		if (this.readyState == 4 && this.status == 200) {
//			console.log(curUser + " in getusercookie");
//
//			user = JSON.parse(this.responseText);
//			
//			newCoins(user);
//		}
//	};
//	xhttp.open("GET", "http://localhost:8082/userget" + curUser, true);
//	xhttp.setRequestHeader("Content-type", "application/json");
//	xhttp.send();
//}
//
//function newCoins(user) {
//	var xhttp = new XMLHttpRequest();
//	xhttp.onreadystatechange = function() {
//		if (this.readyState == 4 && this.status == 200) {
//			
//		}
//	}
//	xhttp.open("POST", "http://localhost:8082/coins" + user , true);
//	xhttp.setRequestHeader("Content-type", "application/json");
//	//xhttp.send(JSON.stringify(user));	
//}