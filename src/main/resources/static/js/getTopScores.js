function selectNamesAndScoresOfTop5(topScores) {
	return topScores.slice(0,5);
}

var app = angular.module('myApp2', []);
app.controller('myCtrl2', function($scope, $http, $interval) {
	var gameType = $('body').attr('id').toUpperCase(); 
	$scope.getScores = function(){
		console.log("getting highscores"+"!!!!!");
		$http({
			url: "/getHighscores",
			type: "GET",
			params: {"type":gameType}	
		}).then(function mySucces(response) {
			$scope.topscores = selectNamesAndScoresOfTop5(response.data);
		},function myError(response) {
			console.log("error")
		});
	};
    /*$interval($scope.getScore,5000)*/
	
	$scope.getScores();
	$scope.setColor = function (score) {
		if(angular.isDefined(score)){
		return "animation: mymove 2s infinite; @-webkit-keyframes mymove { from {color:" + score.user.style1 +
		    "}, to: {color:" + score.user.style2 + "}}";
		};
		console.log(score.user.style1);
		return ("");
	}
	
//	    color1 = style1[index];
//	    color2 = style2[index];
//	    if color2 == "black" {
//	    	return {
//	    		animation: test 1s infinite;
//	    		@-webkit-keyframes test { from {color: blue;} to {color: purple;} } 
//	    	}
//	    	}
//	    } else {
//	    	return {
//	    		td {
//	    		    animation: name 2s infinite;
//	    		}
//
//	    		@-webkit-keyframes name {
//	    		    from {color: color1;}
//	    		    to {color: color2;}
//	    		}
//	    	}
//	    }
	//}	
});

