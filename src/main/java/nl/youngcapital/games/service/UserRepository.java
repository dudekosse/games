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
	@Query("UPDATE User SET color = ?, gold_coins = gold_coins - 50 where username = ?")
	public void updateSimpleColor(String color, String username);
	
	@Transactional
	@Modifying
	@Query("UPDATE User SET color = ?, gold_coins = gold_coins - 500 where username = ?")
	public void updateFancyColor(String color, String username);
	
	@Transactional
	@Modifying
	@Query("UPDATE User SET style = ?, gold_coins = gold_coins - 100 where username = ?")
	public void updateSimpleStyle(String style, String username);
	
	@Transactional
	@Modifying
	@Query("UPDATE User SET effect = ?, gold_coins = gold_coins - 500 where username = ?")
	public void updateEffect(String effect, String username);
	
	@Transactional
	@Modifying
	@Query("UPDATE User SET color = ?, gold_coins = gold_coins - 1000 where username = ?")
	public void updateFlash(String flash, String username);
	
	@Query(value ="select * from user where username = ?",nativeQuery = true)
	public User getUser(String username);
	
}
