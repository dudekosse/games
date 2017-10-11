alert("Werkt");
function postUser(){
	var ent= document.getElementById("username").value;
	var user = '{"name":"'+ent+'"}'; 
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