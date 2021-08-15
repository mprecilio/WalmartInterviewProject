package walmart.walmart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.NoArgsConstructor;
import walmart.walmart.model.User;
import walmart.walmart.service.user.UserService;

@NoArgsConstructor
@RestController
@CrossOrigin(origins="http://localhost:3000", allowCredentials="true")
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
	@GetMapping(value="/get-all-users")
	public List<User> getAllUsers(){
		return userServ.getAllUsers();
	}
		
	//////////////////////////////////////////////////UPDATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
		
		
	//////////////////////////////////////////////////DELETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	

}
