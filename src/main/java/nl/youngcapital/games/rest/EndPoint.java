package nl.youngcapital.games.rest;

import java.util.ArrayList;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
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

	@PostMapping("/gamepost{name}")
	public String postGame(@RequestBody Game game, @PathVariable String name) {
			gameService.add(game);
			return "";
	}
	
	@GetMapping("/coins/{user}/{coins}")
	public void updateCoins(@PathVariable String user, @PathVariable int coins) {
		userService.updateCoins(coins, user);
	}
	
	@GetMapping("/simplestyle/{user}/{style1}")
	public void updateSimpleStyle(@PathVariable String user, @PathVariable String style1) {
		userService.updateSimpleStyle(style1, user);
	}
	
	@GetMapping("/animatedstyle/{user}/{style1}/{style2}")
	public void updateAnimatedStyle(@PathVariable String user, @PathVariable String style1, @PathVariable String style2) {
		userService.updateAnimatedStyle(style1, style2, user);
	}
	
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

	
	@ResponseBody
	@GetMapping("/getHighscores{type}")
	public ArrayList<Game> getHighscores(@PathParam("type") TypeGame type) {
		return gameService.getTopScores(type);
	}
	
	@GetMapping("/getGamesPlayed{type}")
	public int getGamesPlayed(@PathParam("type") TypeGame type) {
//		System.out.println(gameService.countGamesByType(type));
//		return gameService.countGamesByType(type);
		return 1;
	}
		
}