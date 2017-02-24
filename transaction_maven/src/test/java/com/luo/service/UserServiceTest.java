package com.luo.service;

import org.junit.Test;  
import org.springframework.beans.factory.annotation.Autowired;  

import com.luo.baseTest.SpringTestCase;  
import com.luo.domain.User;

public class UserServiceTest extends SpringTestCase {
	
	@Autowired  
    private UserService userService; 
	
/*	@Test  
    public void selectUserByIdTest(){  
        User user = userService.selectUserById(1);  
        System.out.println(user.getUserName() + ":" + user.getUserPassword());
    }  
	*/
	@Test  
    public void addUserTest(){  
		User user = new User();
		user.setUserName("luoguohui112");
		user.setUserPassword("luoguohui121");
        userService.addUser(user);
    }  
}
