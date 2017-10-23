package nl.youngcapital.games.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue
	private Long id;
	
	@Column(unique=true)
	private String username;
	private String password;
	private int age;
	private String country;
	private int goldCoins = 10;
	private String style1 = "black";
	private String style2 = "black";
	
//	@manyToOne()
//	private Scores scores;

	public User() {
		super();
	}
	
	public User(Long id, String username, String password) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
	}

	public User(Long id, String username, String password, int age, String country, int goldCoins, String style1,
			String style2) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.age = age;
		this.country = country;
		this.goldCoins = goldCoins;
		this.style1 = style1;
		this.style2 = style2;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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
	public String getStyle1() {
		return style1;
	}
	public void setStyle1(String style1) {
		this.style1 = style1;
	}
	public String getStyle2() {
		return style2;
	}
	public void setStyle2(String style2) {
		this.style2 = style2;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", age=" + age + ", country="
				+ country + ", goldCoins=" + goldCoins + ", style1=" + style1 + ", style2=" + style2 + "]";
	}
}