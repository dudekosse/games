$(document).ready(function(){
	if (getCookie() == "") {
		showLoggedOutView();
	} else {
		showLoggedInView();		
	}
});

function showLoggedInView() {
	$('.isOnlyShownWhenLoggedIn').show();
	$('.isOnlyShownWhenLoggedOut').hide();
	
}

function showLoggedOutView() {
	$('.isOnlyShownWhenLoggedOut').show();
	$('.isOnlyShownWhenLoggedIn').hide();
}