package nl.youngcapital.games;

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
	private int[] gamesPlayed = new int[3];
	
	public User () {}
		
	public User(Long id, String name, int age, String country, int[] gamesPlayed) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.country = country;
		this.gamesPlayed = gamesPlayed;
	}

	public int[] getGamesPlayed() {
		return gamesPlayed;
	}

	public void setGamesPlayed(int[] gamesPlayed) {
		this.gamesPlayed = gamesPlayed;
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
	
}