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
	@Override
	public User updateUserInfo(User updateInfo) {
		User storedUser = userDao.findByUsername(updateInfo.getUsername());
		if(!updateInfo.getFname().equals(""))storedUser.setFname(updateInfo.getFname());
		if(!updateInfo.getLname().equals(""))storedUser.setLname(updateInfo.getLname());
		if(!(updateInfo.getDob()==(null))) storedUser.setDob(updateInfo.getDob());
		if(!updateInfo.getAddress().equals(""))storedUser.setAddress(updateInfo.getAddress());
		if(!updateInfo.getProfilePhoto().equals(""))storedUser.setProfilePhoto(updateInfo.getProfilePhoto());
		return userDao.save(storedUser);
	}

	////////////////////////////////////////////////// DELETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

}
