package nl.youngcapital.games.service;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import nl.youngcapital.games.model.Game;

@Component
public interface GameRepository extends CrudRepository<Game, Long> {

}
