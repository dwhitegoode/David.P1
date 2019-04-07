package com.revature.service;

import org.apache.log4j.Logger;

import com.revature.data.UserDAO;
import com.revature.model.User;

public class UserService {
	
	private static Logger log = Logger.getLogger(UserService.class);
	static UserDAO dao = new UserDAO();
	
	public User login(String username, String password) {
		User u = dao.getByUsername(username);
		
		if(u == null) {
			log.info("No such user found");
			return null;
		}
		else {
			String userPassword = u.getPassword();	
			if(userPassword.equals(password)) {		
				log.info("User successfully logged in!");
				return u;
			}
			else {
				
				return null;
			}
		}
	}

	public User addUser(User u) {
			if(dao.getByUsername(u.getUsername())==null) {
				
				return dao.addUser(u);
			}
			else {
				return null; 
			}
		}
	
	
	
	
	

}
