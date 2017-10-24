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
    $interval($scope.getScore,5000);
	
	$scope.getScores();
	$scope.setSimple = function (score) {
		if(angular.isDefined(score)){
			color = score.user.color;
			style = score.user.style;
			return {'color': color, 'font-weight': style, 'text-decoration': style, 'font-style': style}
		};
	}
	
	$scope.setFancy = function (score) {
		if(angular.isDefined(score)){
			color = score.user.color;
			effect = score.user.effect;
			if (color == "rainbow") {
				console.log("same");
				classes = String(effect) + " " + String(color);
				console.log(classes);
				return classes;
			} else {
				console.log("different")
				return String(effect);
			}
		}
	}
});