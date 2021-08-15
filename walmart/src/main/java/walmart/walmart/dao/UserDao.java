package walmart.walmart.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;

import walmart.walmart.model.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
	
}
