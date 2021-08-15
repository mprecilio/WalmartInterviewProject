package walmart.walmart.service.user;

import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.NoArgsConstructor;
import walmart.walmart.dao.UserDao;
import walmart.walmart.model.User;
import walmart.walmart.utils.ToEncrypted;

@NoArgsConstructor
@Service
public class UserServiceImpl implements UserService {
	UserDao userDao;

	@Autowired
	public UserServiceImpl(UserDao userDao) {
		super();
		this.userDao = userDao;
	}

	////////////////////////////////////////////////// CREATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


	////////////////////////////////////////////////// READ\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
	@Override
	public List<User> getAllUsers() {
		return userDao.findAll();
	}
	
	////////////////////////////////////////////////// UPDATE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	////////////////////////////////////////////////// DELETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

}
