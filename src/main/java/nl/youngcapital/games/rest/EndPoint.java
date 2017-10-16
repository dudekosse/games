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
	
	@GetMapping("/register")
	public User getUser() {
		User user = new User();
		userService.add(user);
	    return user;
	}

	@PostMapping("/registerpost")
	public boolean postUser(@RequestBody User user) {
		Iterable<User> users = userService.userList();
		boolean check = userService.knownUser(users, user);
		if (check == false) {
			userService.add(user);
			return true;
		} return false;
	}
	
	@GetMapping("/login")
	public Iterable<User> getLogin() {
		return userService.userList();
	}
	
	@PostMapping("/loginpost")
	public boolean postLogin(@RequestBody User user) {
		Iterable<User> users = userService.userList();
		boolean check = userService.knownUser(users, user);
		return check;
	}
	
	@PostMapping("/gamepost")
	public String postGame(@RequestBody Game game) {
		if (gameService.checkType(game.getTypeGame().ordinal())) {
			gameService.updateTable(game);		
			gameService.updateHighscore(game);
		} else {
			System.out.println(gameService.checkType(game.getTypeGame().ordinal()));
			gameService.add(game);
		}
		
		return "redirect:/ticTacToe.html";
		//return "xxxx";

	}
}