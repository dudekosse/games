function postLogin() {
	document.getElementById("outputserver").innerHTML = "";
	
	var username = document.getElementById("loginUsername").value;
	var password = document.getElementById("loginPassword").value;
	
	var user = '{"username":"'+username+'", "password":"'+password+'"}';
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var check = this.responseText;
			var bool = JSON.parse(check);
			if (check) {
				removeCookies();
				createCookie("username",username);
				showLoggedInView();
			} else {
				showLoggedOutView();
			}
		}
	};
	xhttp.open("POST", "http://localhost:8082/loginpost", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(user);
	//location.href = "success.html"
}