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
	
	public void updateSimpleStyle(String style1, String user) {
		userrepository.updateSimpleStyle(style1, user);
	}
	
	public void updateAnimatedStyle(String style1, String style2, String user) {
		userrepository.updateAnimatedStyle(style1, style2, user);
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
	
}