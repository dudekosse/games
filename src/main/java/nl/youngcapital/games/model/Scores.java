package nl.youngcapital.games.model;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Scores {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private ArrayList<Integer> TIC_TAC_TOE;
	private ArrayList<Integer> TETRIS;
}
