package com.luo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.luo.dao.UserDao;
import com.luo.domain.User;


@Service
public class UserServiceImpl implements UserService {

	@Autowired  
    private UserDao userDao;  
  
    public User selectUserById(Integer userId) {  
        return userDao.selectUserById(userId);  
    }
    
    @Transactional
	public int addUser(User user){
    	userDao.addUser(user);
            //用trow关键字抛出异常，当异常被抛出时，程序会跳出该方法
		int id  = user.getUserId();
		System.out.println(id);
		int num =10;
		
		if (id >num) {
			throw new RuntimeException("number is more than"+num);
		}
		
		return id;
	}  
}
