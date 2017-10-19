package nl.youngcapital.games.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import nl.youngcapital.games.model.User;
import nl.youngcapital.games.service.GameService;
import nl.youngcapital.games.service.UserService;

@RestController
public class EndPoint {
	@Autowired
	GameService gameService;
	
	@Autowired
	UserService userService;

	@PostMapping("/registerpost")
	public boolean postUser(@RequestBody User user) {
		Iterable<User> users = userService.userList();
		boolean check = userService.knownUser(users, user);
		if (check == false) {
			userService.add(user);
			return true;
		} return false;
	}
	
	@PostMapping("/loginpost")
	public boolean postLogin(@RequestBody User user) {
		Iterable<User> users = userService.userList();
		boolean check = userService.knownUser(users, user);
		return check;
	}
	
	
	@ResponseBody
	@GetMapping("/userget{name}")
	public User getUser(@PathVariable String name) {
		return userService.getUser(name);
	}
//	
//	@PostMapping("/coins")
//	public void buyCoins(@RequestBody User user) {
//		userService.updateCoins(user, coins);
//	}
//	
//	@PostMapping("/gamepost{name}")
//	public String postGame(@RequestBody Game game, @PathVariable String name) {
//		String name = game.getUser().getUsername();
//		if (gameService.checkType(game.getTypeGame().toString())) {
//			gameService.updateTable(game);		
//			gameService.updateHighscore(game);
//			gameService.updateHighscoreName(name,game);
//		} else {
//			gameService.add(game);
//	}

//		return "redirect:/ticTacToe.html";

}