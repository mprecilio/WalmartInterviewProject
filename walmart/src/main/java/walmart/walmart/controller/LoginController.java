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
@CrossOrigin(origins="http://localhost:3000", allowCredentials="true")
@RequestMapping("/login-service")
public class LoginController {

	private LoginService loginServ;
	@Autowired
	public LoginController(LoginService loginServ) {
		super();
		this.loginServ = loginServ;
	}
	
	
	//////////////////////////////////////////////////CREATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	@PostMapping(value="/register")
	public User register(@RequestBody User userRegistering) {
		return loginServ.save(userRegistering);
	}
	
	//////////////////////////////////////////////////READ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	@PostMapping(value="/login")
	public User login(@RequestBody User userLoggingIn) {
		return loginServ.login(userLoggingIn);
	}
	
	@GetMapping(value="/send-email/{username}")
	public boolean sendEmail(@PathVariable(value="username") String username) {
		System.out.println("username: " + username);
		return loginServ.sendEmail(username);
	}
		
	//////////////////////////////////////////////////UPDATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	@PutMapping(value="/reset-pass")
	public int resetPass(@RequestBody User resetPassUser) {
		return loginServ.resetPass(resetPassUser);
	}
		
	//////////////////////////////////////////////////DELETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	
}
