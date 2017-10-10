package nl.youngcapital.games;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private int age;
	private String country;
	private int goldCoins;
	//private Map<TypeGame,Integer> gamesPlayed = new HashMap<TypeGame,Integer>();
	//private Map<TypeGame,Integer> highScores = new HashMap<TypeGame,Integer>();		
	
	public User() {
		super();
	}
	
//	public User(Long id, String name, int age, String country, int goldCoins, Map<TypeGame, Integer> gamesPlayed,
//			Map<TypeGame, Integer> highScores) {
//		super();
//		this.id = id;
//		this.name = name;
//		this.age = age;
//		this.country = country;
//		this.goldCoins = goldCoins;
//		this.gamesPlayed = gamesPlayed;
//		this.highScores = highScores;
//	}
	
	public User(Long id, String name, int age, String country, int goldCoins) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.country = country;
		this.goldCoins = goldCoins;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getGoldCoins() {
		return goldCoins;
	}
	public void setGoldCoins(int goldCoins) {
		this.goldCoins = goldCoins;
	}
//	public Map<TypeGame, Integer> getGamesPlayed() {
//		return gamesPlayed;
//	}
//	public void setGamesPlayed(Map<TypeGame, Integer> gamesPlayed) {
//		this.gamesPlayed = gamesPlayed;
//	}
//	public Map<TypeGame, Integer> getHighScores() {
//		return highScores;
//	}
//	public void setHighScores(Map<TypeGame, Integer> highScores) {
//		this.highScores = highScores;
//	}
	
	
}