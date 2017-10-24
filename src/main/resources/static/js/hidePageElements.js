$(document).ready(function(){
	if (getCookie() == "") {
		showLoggedOutView();
	} else {
		showLoggedInView();		
	}
	
	
	// creates single page navigation
	$("#tabs").tabs({
		//disables navigation by keys, so it won't interfere with the gameplay
	    activate: function(e, ui) {
	        e.currentTarget.blur();
	    }
	});
});

function showLoggedInView() {
	$('.isOnlyShownWhenLoggedIn').show();
	$('.isOnlyShownWhenLoggedOut').hide();
	
}

function showLoggedOutView() {
	$('.isOnlyShownWhenLoggedOut').show();
	$('.isOnlyShownWhenLoggedIn').hide();
}