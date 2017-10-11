package nl.youngcapital.games.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.games.model.Game;
import nl.youngcapital.games.model.TypeGame;
import nl.youngcapital.games.model.User;
import nl.youngcapital.games.service.GameService;
import nl.youngcapital.games.service.UserService;

@RestController
public class EndPoint {
	@Autowired
	GameService gameService;
	
	@Autowired
	UserService userService;
	
	@GetMapping("/game")
	public Game getGame() {
		Game game = new Game();
		game.setTypeGame(TypeGame.HANGMAN);
		gameService.add(game);
		return game;
	}
	
	@GetMapping("/user")
	public User getUser() {
		User user = new User();
		userService.add(user);
	    return user;
	}

	@PostMapping("/userpost")
	public boolean postUser(@RequestBody User user) {
		System.out.println(user);
		Iterable<User> users = userService.userList();
		boolean check = userService.knownUser(users, user);
		if (check == false) {
			userService.add(user);
			return true;
		}
		return false;
	}
	
	@PostMapping("/gamepost")
	public String postGame(@RequestBody Game game) {
		//System.out.println(game.getTypeGame());
		gameService.add(game);
		return "redirect:/ticTacToe.html";
	}

}
