package walmart.walmart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.NoArgsConstructor;
import walmart.walmart.model.User;
import walmart.walmart.service.login.LoginService;

@NoArgsConstructor
@RestController
@CrossOrigin(origins="*")
@RequestMapping("/login-service")
public class LoginController {

	private LoginService loginServ;
	@Autowired
	public LoginController(LoginService loginServ) {
		super();
		this.loginServ = loginServ;
	}
	
	
	//////////////////////////////////////////////////CREATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	/**
	 * @author revature.matthew.precilio
	 * @return User object with an id of -1 if the username doesnt exist or if the password
	 * 		   entered does not match the hashed password.
	 */
	@PostMapping(value="/register")
	public User register(@RequestBody User userRegistering) {
		return loginServ.save(userRegistering);
	}
	
	//////////////////////////////////////////////////READ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	/**
	 * @author revature.matthew.precilio
	 * @return Either a user containing the logged in user or
	 * 		   a user with id of -1 if invalid login
	 */
	@PostMapping(value="/login")
	public User login(@RequestBody User userLoggingIn) {
		return loginServ.login(userLoggingIn);
	}
	
	/**
	 * @author revature.matthew.precilio
	 * 
	 * Passes a username to service layer to send pass
	 * reset email
	 * 
	 * @param username
	 * @return true if the username exists in the database
	 * 		   false if there is no user by that username
	 */
	@GetMapping(value="/send-email/{username}")
	public boolean sendEmail(@PathVariable(value="username") String username) {
		System.out.println("username: " + username);
		return loginServ.sendEmail(username);
	}
		
	//////////////////////////////////////////////////UPDATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	/**
	 * @author revature.matthew.precilio
	 * 
	 * Passes token, username, and new pass to service layer to 
	 * Handle password reset
	 * 
	 * @param resetPassUser
	 * @return -1 username or token dont match, -2 password was not changed
	 * 		   	1 password was successfully reset
	 */
	@PutMapping(value="/reset-pass")
	public int resetPass(@RequestBody User resetPassUser) {
		return loginServ.resetPass(resetPassUser);
	}
		
	//////////////////////////////////////////////////DELETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	
}
