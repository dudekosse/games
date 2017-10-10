package nl.youngcapital.games.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.games.model.Game;
import nl.youngcapital.games.model.TypeGame;
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
	@GetMapping("/NewFile")
	public Game getGame2() {
		Game game = new Game();
		game.setTypeGame(TypeGame.HANGMAN);
		gameService.test(game);
		return game;
	}
	@PostMapping("/gamepost")
	public void postEntiteit(@RequestBody Game game) {
		System.out.print("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		System.out.println("Jojo");
		System.out.println(game.getTypeGame());
		gameService.test(game);
	}
}
