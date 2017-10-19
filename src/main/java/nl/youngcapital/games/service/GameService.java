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
		gamerepository.updateTable(game.getTimesPlayed(),game.getTypeGame().toString());
	}
	
	public void updateHighscore(Game game) {
		gamerepository.updateHighscore(game.getScore(),game.getScore(), game.getTypeGame().toString());
	}
	
	public boolean checkType(String type) {
		if (gamerepository.checkType(type).size() > 0) {
			return true;
		} else {
			return false;
		}	
	}
	
	public void updateHighscoreName(String name, Game game) {
		gamerepository.updateHighscoreName(name, game.getTypeGame().toString());
	}
//	public ArrayList<TypeGame> checkType(TypeGame type) {
//		return gamerepository.checkType(type);
//	}

}
