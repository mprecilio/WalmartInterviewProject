package walmart.walmart.service.login;

import java.security.NoSuchAlgorithmException;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.NoArgsConstructor;
import walmart.walmart.dao.LoginDao;
import walmart.walmart.model.User;
import walmart.walmart.utils.RandomToken;
import walmart.walmart.utils.SendingMail;
import walmart.walmart.utils.ToEncrypted;

@NoArgsConstructor
@Service
public class LoginServiceImpl implements LoginService{
	
	LoginDao loginDao;

	@Autowired
	public LoginServiceImpl(LoginDao loginDao) {
		super();
		this.loginDao = loginDao;
	}
	
	
	//////////////////////////////////////////////////CREATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	@Override
	public User save(User newUser) {
		if(newUser.getAddress().equals("") || newUser.getUsername().equals("") 
				|| newUser.getPassword().equals("") || newUser.getFname().equals("") 
				|| newUser.getEmail().equals("") || newUser.getLname().equals("") 
				|| newUser.getDob().equals("")) return null;
		//checks if username is taken
		if(loginDao.existsByUsername(newUser.getUsername())) return new User(-1);
		if(loginDao.existsByEmail(newUser.getEmail())) return new User(-2);
		//adds salt and encrypts the password
		byte[] salt = ToEncrypted.createSalt();
		newUser.setSalt(salt);
		try {
			newUser.setPassword(ToEncrypted.generateHash(newUser.getPassword(), salt));
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		//adds random token
		newUser.setToken(RandomToken.randomToken());
		//adds default image
		newUser.setProfilePhoto("default.png");
		return loginDao.save(newUser);
	}
	
	//////////////////////////////////////////////////READ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	@Override
	public User login(User userLoggingIn) {
		if(!loginDao.existsByUsername(userLoggingIn.getUsername())) return new User(-1);
		User matchingUser = loginDao.findByUsername(userLoggingIn.getUsername());
		byte[] storedSalt = matchingUser.getSalt();
		String loginPassHashed="";
		try {
			loginPassHashed = ToEncrypted.generateHash(userLoggingIn.getPassword(), storedSalt);
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		if(matchingUser.getPassword().equals(loginPassHashed)) return matchingUser;
		return new User(-1);
	}


	@Override
	public boolean sendEmail(String username) {
		if(!loginDao.existsByUsername(username)) return false;
		User matchingUser = loginDao.findByUsername(username);
		try {
			SendingMail.sendMail(matchingUser.getEmail(), matchingUser.getUsername(), matchingUser.getToken());
		} catch (MessagingException e) {
			e.printStackTrace();
		}
		return true;
	}


	//////////////////////////////////////////////////UPDATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	@Override
	public int resetPass(User resetPassUser) {
		//Checking if a user with this username exists and if the token matches
		if(!loginDao.existsByUsername(resetPassUser.getUsername())) return -1;
		User matchingUser = loginDao.findByUsername(resetPassUser.getUsername());
		if(!matchingUser.getToken().equals(resetPassUser.getToken())) return -1;
		
		//Checking if the password is matches the old password
		String hashedPass = "";
		try {
			hashedPass = ToEncrypted.generateHash(resetPassUser.getPassword(), matchingUser.getSalt());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		if(matchingUser.getPassword().equals(hashedPass)) return -2;
		
		//set the new password, adds a new random token, persist user, return success
		matchingUser.setPassword(hashedPass);
		matchingUser.setToken(RandomToken.randomToken());
		loginDao.save(matchingUser);
		return 1;
	}
		
	//////////////////////////////////////////////////DELETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	

}
