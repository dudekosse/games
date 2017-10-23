/**
 * 
 */

function selectNamesAndScoresOfTop5(topScores) {
	scores = []
	names = []
	var topScores = topScores.length > 4 ? topScores.slice(0,5) : topScores; 
	for (i	=0; i < topScores.length; i++) {
		scores[i] = topScores[i].score;
		names[i] = topScores[i].user.username;
	}
	return [names, scores]
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

		},function myError(response) {
			console.log("error")
		});
	},5000)
	$scope.getScores();
});