package nl.youngcapital.games.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nl.youngcapital.games.model.Game;

@Service
@Transactional
public class GameService {
	@Autowired
	GameRepository gamerepository;
	
	public Game add(Game game) {
		gamerepository.save(game);
		return game;
	}
	public void updateTable(Game game) {
		gamerepository.updateTable(game.getTimesPlayed(), game.getHighScore(),game.getHighScore(),game.getTypeGame());
	}
//	public boolean checkType(int type) {
//		if (gamerepository.checkType(type) != 0) {
//			return true;
//		} else {
//			return false;
//		}	
//	}
	
}
