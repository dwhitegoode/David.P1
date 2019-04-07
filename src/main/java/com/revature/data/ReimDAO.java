package com.revature.data;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.revature.model.Reimbursement;
import com.revature.model.User;
import com.revature.util.ConnectionFactory;

public class ReimDAO {

	public Reimbursement getByUsername(String name) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public static Reimbursement addReimburse(Reimbursement r, User a) {
		try (Connection conn = ConnectionFactory.getInstance().getConnection()) {
			String sql = "Insert into ers_reimbursement values (id,?,?,null,?,null,?,null,?,?)";
			
			
			
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return r;
	}
	

}
