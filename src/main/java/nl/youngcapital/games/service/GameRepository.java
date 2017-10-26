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

	public ArrayList<Game> findByTypeGameOrderByScoreDesc(TypeGame typeGame);
	
//	public ArrayList<Game> findByTypeGame(TypeGame typeGame);
//	public int CountfindByTypeGame(TypeGame typeGame);
}
