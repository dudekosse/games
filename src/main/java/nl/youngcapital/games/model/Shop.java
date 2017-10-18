package nl.youngcapital.games.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Shop {
	
	@Id
	@GeneratedValue	
	private Long id;
	private int vault;
	
	public Shop(int vault) {
		super();
		this.vault = vault;
	}

	public int getVault() {
		return vault;
	}
	
	public void setVault(int vault) {
		this.vault = vault;
	}
	
	public User buyStyle(User user) {
		//todo, add functionality	
		return user;
	}
	
	public User buyCoins(User user) {
		return user;
	}
}
