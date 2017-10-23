package nl.youngcapital.games.service;


import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import nl.youngcapital.games.model.User;

@Component
public interface UserRepository extends CrudRepository<User, Long> {
	
	@Transactional
	@Modifying
	@Query("UPDATE User SET gold_coins = gold_coins + ? where username = ?")
	public void updateCoins(int coins, String username);
	
	@Transactional
	@Modifying
	@Query("UPDATE User SET style1 = ? where username = ?")
	public void updateSimpleStyle(String style1, String username);
	
	@Transactional
	@Modifying
	@Query("UPDATE User SET style1 = ?, style2 = ? where username = ?")
	public void updateAnimatedStyle(String style1, String style2, String username);
	
	@Query(value ="select * from user where username = ?",nativeQuery = true)
	public User getUser(String username);
	
}
