package com.luo.controller;

import org.springframework.beans.factory.annotation.Autowired;  

import com.luo.domain.User;
import com.luo.service.UserService;



import com.luo.service.UserServiceImpl;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/")
public class UserServiceTest {
	
	@Autowired  
    private UserService userService; 
	
/*	@Test  
    public void selectUserByIdTest(){  
        User user = userService.selectUserById(1);  
        System.out.println(user.getUserName() + ":" + user.getUserPassword());
    }  
	*/
    @RequestMapping(value = "addUserTest")
    @ResponseBody
    public String addUserTest(){  
		User user = new User();
		user.setUserName("luoguohui112");
		user.setUserPassword("luoguohui121");
		int id = userService.addUser(user);
        return "当前Id:"+String.valueOf(id);
    }  
}
