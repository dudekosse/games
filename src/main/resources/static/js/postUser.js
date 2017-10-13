function calcAge(dateofbirth) {
	var today = new Date();
    var dateofbirth = new Date(dateofbirth);
    var age = today.getFullYear() - dateofbirth.getFullYear();
    var mon = today.getMonth() - dateofbirth.getMonth();
    if (mon < 0 || (mon === 0 && today.getDate() < dateofbirth.getDate())) {
        age--;
    }
    return age;
}

function postUser(){
	var username= document.getElementById("username").value;
	var password= document.getElementById("password").value;
	var day = document.getElementById("day").value;
	var month= document.getElementById("month").value;
	var year = document.getElementById("year").value;
	var datestring = String(month)+"-"+String(day)+"-"+String(year);
	var age = calcAge(datestring)
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
	location.href = "success.html"
}