package nl.youngcapital.games.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nl.youngcapital.games.model.User;

@Service
@Transactional
public class UserService {
	@Autowired
	UserRepository userrepository;
	
	public User add(User user) {
		userrepository.save(user);
		return user;
	}
	
	public Iterable<User> userList() {
		return userrepository.findAll();
	}
	
	public void updateCoins(int coins, String user) {
		userrepository.updateCoins(coins, user);
	}
	
	public void updateSimpleColor(String color, String user) {
		userrepository.updateSimpleColor(color, user);
	}
	
	public void updateFancyColor(String color, String user) {
		userrepository.updateFancyColor(color, user);
	}
	
	public void updateSimpleStyle(String style, String user) {
		userrepository.updateSimpleStyle(style, user);
	}
	
	public void updateEffect(String effect, String user) {
		userrepository.updateEffect(effect, user);
	}
	
	public void updateFlash(String flash, String user) {
		userrepository.updateFlash(flash, user);
	}
	
	public boolean knownUser(Iterable<User> knownUsers, User user) {
		boolean check = false; 
		for (User knownUser : knownUsers) {
			if (knownUser.getUsername().equals(user.getUsername()) && (knownUser.getPassword().equals(user.getPassword())))
				check = true;
		}
		return check;
	}
	
	public User getUser(String username) {
		return userrepository.getUser(username);
	}
	
	public int selectGoldCoins(String username) {
		return userrepository.selectGoldCoins(username);
	}
	
}