//package nl.youngcapital.games.service;
//
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.stereotype.Component;
//
//import nl.youngcapital.games.model.Highscores;
//import nl.youngcapital.games.model.User;
//
//@Component
//public interface HighscoreRepository extends CrudRepository<User, Long> {
//
//	@Query(value ="select times_played from game where type_game = ?", nativeQuery = true)
//	public boolean checkTable(Highscores highScores);
////	public void saveScore(score,game);
//
//}
