package nl.youngcapital.games.service;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import nl.youngcapital.games.model.Game;
import nl.youngcapital.games.model.TypeGame;

@Service
@Transactional
public class GameService {
	@Autowired
	GameRepository gamerepository;
	
	public Game add(Game game) {
		gamerepository.save(game);
		return game;
	}
	
	public ArrayList<Game> getTopScores(TypeGame typeGame) {
//		ArrayList<Game> sortedGames = gamerepository.findByTypeGameOrderByScoreDesc(typeGame);
//		return sortedGames;
		return gamerepository.findByTypeGameOrderByScoreDesc(typeGame);
	};
	
//	public int countGamesByType(TypeGame typeGame) {
//		return gamerepository.findByTypeGame(typeGame).size();
//	};



}
