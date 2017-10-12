package nl.youngcapital.games.service;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import nl.youngcapital.games.model.Game;
import nl.youngcapital.games.model.TypeGame;

@Component
public interface GameRepository extends CrudRepository<Game, Long> {
	
	//@Modifying	
	//@Query("UPDATE Game SET times_played = times_played + ?, high_score = ? where ? > high_score and type_game = ?")

	@Transactional
	@Modifying
	@Query("UPDATE Game SET times_played = times_played + ? where type_game = ?")
	public void updateTable(int plays1, int typeGame);
	
  	@Transactional
  	@Modifying
	@Query("UPDATE Game SET high_score = ? where ? > high_score and type_game = ?")
	public void updateHighscore(int hs1, int hs2, int typeGame);
  	
	//public void updateTable(int plays1, int hs1, int hs2, TypeGame typeGame);
	
	@Query(value ="select times_played from game where type_game = ?", nativeQuery = true)
	public ArrayList<TypeGame> checkType(int type);


}
