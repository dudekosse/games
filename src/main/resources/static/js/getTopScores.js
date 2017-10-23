/**
 * 
 */

function selectNamesAndScoresOfTop5(topScores) {
	scores = []
	names = []
	styles = []
	var topScores = topScores.length > 4 ? topScores.slice(0,5) : topScores; 
	for (i	=0; i < topScores.length; i++) {
		scores[i] = topScores[i].score;
		names[i] = topScores[i].user.username;
		styles[i] = topScores[i].user.style;
	}
	return [names, scores, styles]
}

var app = angular.module('myApp2', []);
app.controller('myCtrl2', function($scope, $http, $interval) {
	var gameType = $('body').attr('id').toUpperCase(); 
	$interval($scope.getScores = function(){
		console.log("getting highscores"+"!!!!!");
		$http({
			url: "/getHighscores",
			type: "GET",
			params: {"type":gameType}	
		}).then(function mySucces(response) {
			console.log("succes")
			topInfo = selectNamesAndScoresOfTop5(response.data)
			$scope.names = topInfo[0];
			$scope.scores = topInfo[1];
			$scope.styles = topInfo[2];

		},function myError(response) {
			console.log("error")
		});
	},5000)
	$scope.getScores();
	$scope.setColor = function (index) {
	    color1 = styles[index];
	    console.log("in colour")
	    return {color: color1}
	}
	
});

