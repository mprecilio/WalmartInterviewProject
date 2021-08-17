package walmart.walmart.service.login;

import walmart.walmart.model.User;

public interface LoginService {

	/**
	 * @author revature.matthew.precilio
	 * 
	 * This method is used to register a new user
	 * 
	 * @param myUser
	 */
	public User save(User newUser);
	
	//////////////////////////////////////////////////READ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	/**
	 * @author revature.matthew.precilio
	 * 
	 * The method handles user login. It will accept a User object, if the user exists
	 * the password entered will be hashed with the given salt value and compared
	 * against the hashed password.
	 * 
	 * @param User object containing the username and password
	 * @return User object with an id of -1 if the username doesnt exist or if the password
	 * 		   entered does not match the hashed password.
	 */
	public User login(User userLoggingIn);
	
	/**
	 * @author revature.matthew.precilio
	 * 
	 * Handles user sending the reset password email.
	 * Verifies user exists and sends an email with a reset link
	 * 
	 * @param username
	 * @return true if the username exists in the database
	 * 		   false if there is no user by that username
	 */
	public boolean sendEmail(String username);
		
	//////////////////////////////////////////////////UPDATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	/**
	 * @author revature.matthew.precilio
	 * 
	 * Handles user reset password.
	 * Verifies user exists, tokens match, and new password was input
	 * 
	 * @param resetPassUser
	 * @return -1 username or token dont match, -2 password was not changed
	 * 		   	1 password was successfully reset
	 */
	public int resetPass(User resetPassUser);
		
	//////////////////////////////////////////////////DELETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	
	
}
