package walmart.walmart.controller;

import static org.junit.jupiter.api.Assertions.*;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import walmart.walmart.WalmartApplication;
import walmart.walmart.model.User;
import walmart.walmart.service.user.UserService;

@SpringBootTest(classes = WalmartApplication.class)
@ExtendWith(MockitoExtension.class)
class UserControllerTest {
	
	//Arrange
	
	//Act
	
	//Assert
	
	UserController userControl;
	
	@Mock
	UserService userServ;
	
	@BeforeEach
	void setUp() throws Exception {
		
	}
	
}
