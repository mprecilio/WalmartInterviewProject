package walmart.walmart.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.sql.Date;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import walmart.walmart.WalmartApplication;
import walmart.walmart.model.User;
import walmart.walmart.service.login.LoginService;

@SpringBootTest(classes = WalmartApplication.class)
@ExtendWith(MockitoExtension.class)
class LoginControllerTest {
	
	//Arrange
	
	//Act
	
	//Assert
	
	LoginController loginControl;
	
	@Mock
	LoginService loginServ;
	
	@BeforeEach
	void setUp() throws Exception {
		loginControl = new LoginController(loginServ);
	}
	
	/**
	 * @author revature.matthew.precilio
	 * 
	 * Test registering a new user
	 * 
	 */
	@Test
	void register() {
		//Arrange
		byte[] salt = {-43,-100,-60,-99,-111};
		User testUser = new User(1, "admin", salt, "admin", "Matthew", "Precilio", new Date(98, 1, 8), "1061 Morning View Dr, Gallatin TN, 37066", "default.png", "h9sgh9dghwibnbjsbg98bwjbkjb", "mprecilio@gmail.com");
		User expectedUser = new User(1, "admin", salt, "B5905DC0A373DDA44F1BC3BB9127F68BF1BA10D878BA4C68AA45341331621AA1", "Matthew", "Precilio", new Date(98, 1, 8), "1061 Morning View Dr, Gallatin TN, 37066", "default.png", "h9sgh9dghwibnbjsbg98bwjbkjb", "mprecilio@gmail.com");
		when(loginServ.save(testUser)).thenReturn(expectedUser);
		//Act
		User actualUser = loginControl.register(testUser);
		//Assert
		verify(loginServ, times(1)).save(testUser);
		assertEquals(expectedUser, actualUser);
	}

}
