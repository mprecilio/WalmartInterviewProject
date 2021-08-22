package walmart.walmart.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import walmart.walmart.model.User;

@Repository
public interface LoginDao  extends JpaRepository<User, Integer>  {
	////////////////////////////////////////////////// CREATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	////////////////////////////////////////////////// READ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	public User findByUsername(String username);
	
	public User findByUsernameLower(String usernameLower);
	
	public boolean existsByUsername(String username);
	
	public boolean existsByUsernameLower(String usernameLower);
	
	public boolean existsByEmail(String email);
	

	////////////////////////////////////////////////// UPDATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	////////////////////////////////////////////////// DELETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

}
