package walmart.walmart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.NoArgsConstructor;
import walmart.walmart.model.User;
import walmart.walmart.service.user.UserService;

@NoArgsConstructor
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/user-service")
public class UserController {
	
	private UserService userServ;
	@Autowired
	public UserController(UserService userServ) {
		super();
		this.userServ = userServ;
	}
	
	
	//////////////////////////////////////////////////CREATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	
	//////////////////////////////////////////////////READ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	/**
	 * @author revature.matthew.precilio
	 * @return List of all users in database
	 */
	@GetMapping(value="/get-all-users")
	public List<User> getAllUsers(){
		return userServ.getAllUsers();
	}
		
	//////////////////////////////////////////////////UPDATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	/**
	 * @author revature.matthew.precilio
	 * @return the updated current user details
	 */
	@PutMapping(value="/update-user-info")
	public User updateUserInfo(@RequestBody User updateInfo){
		return userServ.updateUserInfo(updateInfo);
	}
		
	//////////////////////////////////////////////////DELETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	

}
