function postUser(){
	var varname= document.getElementById("username").value;
	var varpw= document.getElementById("password").value;
	var varage= document.getElementById("age").value;
	var varcountry= document.getElementById("country").value;
    
	var user = {username: varname , password: varpw, age: varage, country: varcountry};
	console.log(user);
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 202) {
			document.getElementById("outputserver").innerHTML = this.responseText;
		}
	};

	xhttp.open("POST", "http://localhost:8082/userpost", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(user);					

}