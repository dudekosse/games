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
	
	@Transactional
	@Modifying
	@Query("UPDATE Game SET times_played = times_played + ? where type_game = ?")
	public void updateTable(int plays1, String typeGame);
	
  	@Transactional
  	@Modifying
	@Query("UPDATE Game SET score = ? where ? > score and type_game = ?")
	public void updateHighscore(int hs1, int hs2, String typeGame);
  	
  	@Transactional
  	@Modifying
	@Query("UPDATE Game set user = ? where ? != user")
  	public void updateHighscoreName(String name, String typeGame);
	//public void updateTable(int plays1, int hs1, int hs2, TypeGame typeGame);
	
	@Query(value ="select times_played from game where type_game = ?", nativeQuery = true)
	public ArrayList<TypeGame> checkType(String type);
	

	public ArrayList<Game> findByTypeGameOrderByScoreDesc(TypeGame typeGame);
	
	public int CountfindByTypeGame(TypeGame typeGame);
}
