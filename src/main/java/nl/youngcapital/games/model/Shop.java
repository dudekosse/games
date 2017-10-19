package nl.youngcapital.games.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Shop {
	
	@Id
	@GeneratedValue	
	private Long id;
	private int coinVault;
	private int moneyVault;
	
	public Shop(Long id, int coinVault, int moneyVault) {
		super();
		this.id = id;
		this.coinVault = coinVault;
		this.moneyVault = moneyVault;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getCoinVault() {
		return coinVault;
	}

	public void setCoinVault(int coinVault) {
		this.coinVault = coinVault;
	}

	public int getMoneyVault() {
		return moneyVault;
	}

	public void setMoneyVault(int moneyVault) {
		this.moneyVault = moneyVault;
	}

	public User buyStyle(User user) {
		//todo, add functionality	
		return user;
	}
	
	public User buyCoins(User user) {
		return user;
	}
}
