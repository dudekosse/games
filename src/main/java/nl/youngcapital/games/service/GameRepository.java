package nl.youngcapital.games.service;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import nl.youngcapital.games.model.Game;

@Component
public interface GameRepository extends CrudRepository<Game, Long> {
	@Query("UPDATE game SET high_score = \"id1\" where id1 > high_score, SET times_played + \"id2\\")
	void updateTable(int id1, int id2);
	
	//@Query("select * from game where type_game == \"type"\")
}
