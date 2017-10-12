package nl.youngcapital.games.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Game {
	@Id
	@GeneratedValue
	private Long id;
	private TypeGame typeGame;
	private int timesPlayed;
	private String user;
	private int highScore;
	
	public Game () {}

	public Game(Long id, TypeGame typeGame, int timesPlayed, String user, int highScore) {
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public TypeGame getTypeGame() {
		return typeGame;
	}
	
	@Enumerated(EnumType.ORDINAL)
	public void setTypeGame(TypeGame typeGame) {
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
		if (highScore > this.highScore) {
			this.highScore = highScore;
	
		}
	}

	@Override
	public String toString() {
		return "Game [id=" + id + ", typeGame=" + typeGame + ", timesPlayed=" + timesPlayed + ", user=" + user
				+ ", highScore=" + highScore + "]";
	}

	
	
}
