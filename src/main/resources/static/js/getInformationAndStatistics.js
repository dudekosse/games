/**
 * 
 */

function getUserScore(gameType) {
	
}

var app = angular.module('getStatisticsApp', []);
app.controller('myCtrl3', function($scope, $http) {

	$scope.getGamesPlayed = function(gameType, url, parameters, setFunc) {
		$http({
			url: url,
			type: "GET",
			params: parameters	
		}).then(function mySucces(response) {
			console.log("succes")
			console.log(response)
			setFunc(gameType, response);
		},function myError(response) {
			console.log("error")
		});
	}

	setGlobalGamesPlayed =  function(gameType,response) {
		switch (gameType) {
		case "TETRIS":
			console.log(gameType + "response: " + response + "!!!!");
			//set in html
			break;
		 case "TIC_TAC_TOE":
			console.log(gameType + "!!!!1");
			//setin  html
			console.log("lukt")
			break;
		}

	}
	
	//for global game
	var gameType = "TETRIS"
		
	//for global game
		
	var url = "/getGamesPlayed";
	var parameters = {"type":gameType};
	var setFunc = setGlobalGamesPlayed;

	$scope.getGamesPlayed(gameType, url, parameters, setFunc);
	
	//for user name
	
	
	
	function getMeanScore(gameType) {
		
	}
	
	function getHighScore() {
		
}
})
