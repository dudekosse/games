function postLogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	var user = '{"username":"'+username+'", "password":"'+password+'"}';
	
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var check = this.responseText;
			var bool = JSON.parse(check);
			login(bool);
		}
	};
	xhttp.open("POST", "http://localhost:8082/loginpost", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(user);
}
		
function login(bool) {
	if (bool == true){
		alert("Login succesfull!")
	} else {
		alert("Username and password combination invalid");
	}
}