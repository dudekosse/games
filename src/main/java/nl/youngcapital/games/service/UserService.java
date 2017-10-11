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
}