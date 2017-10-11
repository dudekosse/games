function postUser(){
	var name= document.getElementById("username").value;
	var pw= document.getElementById("password").value;
	var age= document.getElementById("age").value;
	var country= document.getElementById("country").value;
    
	var user = '{"name": "'+name+'","password": "'+pw+'","age":"'+age+'","country":"'+country+'"}';
	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 202) {
			document.getElementById("outputserver").innerHTML = this.responseText;
		}
	};
	alert(user);
	xhttp.open("POST", "http://localhost:8082/userpost", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(user);	
}