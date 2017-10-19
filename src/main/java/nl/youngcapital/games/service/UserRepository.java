package nl.youngcapital.games.service;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import nl.youngcapital.games.model.User;

@Component
public interface UserRepository extends CrudRepository<User, Long> {
	

	@Query(value ="select * from user where username = ?",nativeQuery = true)
	public User getUser(String username);
	
}
