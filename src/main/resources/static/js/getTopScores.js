function selectNamesAndScoresOfTop5(topScores) {
	return topScores.slice(0,5);
}

var app = angular.module('myApp2', []);
app.controller('myCtrl2', function($scope, $http, $interval, $attrs) {

	var gameType = $attrs.game;

	$scope.getScores = function(){
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
	$scope.getScores();	
    $interval($scope.getScores,5000);
  //  $scope.getScore
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
			console.log(color);
			if (color == "rainbow") {
				return String(effect) + " " + String(color);
			} else if (color == "flash") {
				return String(effect) + " " + String(color);
			} else {
				return String(effect);
			}
		}
	}
});