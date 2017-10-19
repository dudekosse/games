package nl.youngcapital.games.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Game {

	private Long id;
	private TypeGame typeGame;
	private int timesPlayed;
	
	private User user;
	private int score;
	
	public Game () {}

	public Game(Long id, TypeGame typeGame, int timesPlayed, User user, int score) {
		super();
		this.id = id;
		this.typeGame = typeGame;
		this.timesPlayed = timesPlayed;
		this.user = user;
		this.score = score;
	}
	
	@OneToOne
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	@Id
	@GeneratedValue
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	@Enumerated(EnumType.STRING)
	public TypeGame getTypeGame() {
		return typeGame;
	}
	
	public void setTypeGame(TypeGame typeGame) {
		this.typeGame = typeGame;
	}

	public int getTimesPlayed() {
		return timesPlayed;
	}

	public void setTimesPlayed(int timesPlayed) {
		this.timesPlayed = timesPlayed;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		if (score > this.score) {
			this.score = score;
	
		}
	}

	@Override
	public String toString() {
		return "Game [id=" + id + ", typeGame=" + typeGame + ", timesPlayed=" + timesPlayed + ", user=" + user.toString()
				+ ", score=" + score + "]";
	}

	
	
}
