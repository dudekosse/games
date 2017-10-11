package nl.youngcapital.games.service;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import nl.youngcapital.games.model.Game;
import nl.youngcapital.games.model.TypeGame;

@Component
public interface GameRepository extends CrudRepository<Game, Long> {
	@Query("UPDATE Game SET times_played = times_played + ?, high_score = ? where ? > high_score and type_game = ?")
	void updateTable(int plays1, int hs1, int hs2, TypeGame typeGame);
	
//	@Query("select times_played from Game where type_game = ?")
//	int checkType(int type);

}
