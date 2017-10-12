function postUser(){
	var username= document.getElementById("username").value;
	var password= document.getElementById("password").value;
	var age= document.getElementById("age").value;
	var country= document.getElementById("country").value;
    
	var user = '{"username": "'+username+'","password": "'+password+'","age":"'+age+'","country":"'+country+'"}';
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