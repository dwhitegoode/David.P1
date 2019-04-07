package com.revature.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.model.Reimbursement;
import com.revature.model.User;
import com.revature.service.UserService;

@WebServlet("/submitreim")
public class ReimbursementServlet extends HttpServlet {

	private static Logger log = Logger.getLogger(LoginServlet.class); // logger
	static UserService service = new UserService();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doGet(req, resp);
	}

	@Override
		protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
			
			log.info("EXECUTING REIMBURSEMENT SERVLET!");
			ObjectMapper mapper = new ObjectMapper();
			
			Reimbursement reim = mapper.readValue(req.getInputStream(), Reimbursement.class); //reading user
			
			
			PrintWriter writer = resp.getWriter();
			resp.setContentType("application/json");
			writer.write("");
		}

	
}
