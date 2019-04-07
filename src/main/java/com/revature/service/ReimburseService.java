package com.revature.service;

import org.apache.log4j.Logger;

import com.revature.data.ReimDAO;
import com.revature.model.Reimbursement;
import com.revature.model.User;

public class ReimburseService {
	
	private static Logger log = Logger.getLogger(ReimburseService.class);
	static ReimDAO dao = new ReimDAO();
	
	public Reimbursement submitReimbursement(double amount, String name, String type) {
		Reimbursement r = dao.getByUsername(name);
		
		
		
		return r;
	}

}
