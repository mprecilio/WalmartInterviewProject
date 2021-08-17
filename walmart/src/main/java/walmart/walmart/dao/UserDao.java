package walmart.walmart.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import walmart.walmart.model.User;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
	//////////////////////////////////////////////////CREATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	
	//////////////////////////////////////////////////READ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	public User findByUsername(String username);
	
	//////////////////////////////////////////////////UPDATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		
	
	//////////////////////////////////////////////////DELETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	
}
