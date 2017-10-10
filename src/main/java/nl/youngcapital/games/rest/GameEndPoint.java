package nl.youngcapital.games.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.games.model.Game;
import nl.youngcapital.games.service.GameService;

@RestController
public class GameEndPoint {
	@Autowired
	GameService gameService;
	
	@GetMapping("/game")
	public Game getGame() {
		Game game = new Game();
		gameService.test(game);
		return game;
	}
}
