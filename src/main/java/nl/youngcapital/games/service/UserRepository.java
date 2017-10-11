package nl.youngcapital.games.service;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import nl.youngcapital.games.model.User;

@Component
public interface UserRepository extends CrudRepository<User, Long> {

}
