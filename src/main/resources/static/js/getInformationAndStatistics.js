/**
 * 
 */

function getUserScore(gameType) {
	
}

app.controller('myCtrl3', function($scope) {

	$scope.getGamesPlayed = function(gameType) {
		$http({
			url: "/getGamesPlayed",
			type: "GET",
			params: {"type":gameType}	
		}).then(function mySucces(response) {
			console.log("succes")
			console.log(response)
	
		},function myError(response) {
			console.log("error")
		});
	}
	$scope.getGamesPlayed("TETRIS");
}

function genMeanScore(gameType) {
	
}

function getHighScore() {
	
}