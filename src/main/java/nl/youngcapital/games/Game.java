package nl.youngcapital.games;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Game {
	@Id
	@GeneratedValue
	private Long id;
	private typeGame typeGame;
	private int timesPlayed;
	private String user;
	private int highScore;
	
	public Game () {}

	public Game(Long id, nl.youngcapital.games.typeGame typeGame, int timesPlayed, String user, int highScore) {
		super();
		this.id = id;
		this.typeGame = typeGame;
		this.timesPlayed = timesPlayed;
		this.user = user;
		this.highScore = highScore;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public typeGame getTypeGame() {
		return typeGame;
	}

	public void setTypeGame(typeGame typeGame) {
		this.typeGame = typeGame;
	}

	public int getTimesPlayed() {
		return timesPlayed;
	}

	public void setTimesPlayed(int timesPlayed) {
		this.timesPlayed = timesPlayed;
	}

	public int getHighScore() {
		return highScore;
	}

	public void setHighScore(int highScore) {
		this.highScore = highScore;
	}
	
}
