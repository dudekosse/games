
function buyStyle(styleType, price) { 
	if (styleType == null) {
		alert("select a style")
	} else {
		var url = "";
		var style = "";
		if (styleType == "simpelColor") {
			url = "/simplecolor/";
			style = document.getElementById("color").value;
		} else if (styleType == "simpleStyle") {
			url = "/simplestyle/";
			style = document.getElementById("style").value;
		} else if (styleType == "fancycolor") {
			url = "/fancycolor/";
			style = document.getElementById("fancy").value;
		} 
		var curUser = checkCookie();
		$.ajax({
		    type: 'get',
		    url: "/userget" + curUser,
		    success: function(user) {
		    	if (user.goldCoins > price) {
		    		addStyle(url, user, style)
		    	} else {
		    		alert("not enough coins");
		    	}
		    }
		});
	}
}

function addStyle(url, curUser, style) {
	var xhttp1 = new XMLHttpRequest();
	var user = getCookie("username");
	if (this.readyState == 4 && this.status == 200) {
		alert(style + " bought")
	}

	xhttp1.open("POST", "http://localhost:8082" + url + curUser.username + "/" + style, true);
	xhttp1.setRequestHeader("Content-type", "application/json");
	xhttp1.send();

}
