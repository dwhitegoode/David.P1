window.onload = function(){
	console.log("app loading");
	loadLandingView();
}
//HOME PAGE
function loadLandingView(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			console.log('LOADING RESPONSE RECIEVED');
			$('#view').html(xhr.responseText);
			console.log(xhr.responseText);
			//--Add event listeners--
			$('#home').on('click', loadLandingView);
			$('#client').on('click', loadLoginView);
			$('#admin').on('click', loadAdminView);
			$('#subreimb').on('click', loadSubmit);
			$('#manage').on('click', loadManage);
			
		}
	}
	xhr.open("GET", "home.view");
	xhr.send();
}
//CLIENT PAGE
function loadLoginView(){
	console.log("Login Clicked");
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			console.log("MOVING TO LOGIN PAGE");
			$('#view').html(xhr.responseText);
			$('#password').on('keydown',function(e){
				if(e.which == 13){
					loginUser();
				}
			});
			
			$('#login').on('click', loginUser);
		}
	}
	xhr.open("GET", "login.view");
	xhr.send();
	console.log("SENT LOGIN REQ");
}

//LOGIN USER
function validateStrings(str){
	if(str == null || str == '') return false;
	else return true;
}

function loginUser(){
	var name = $('#username').val();
	var pw = $('#password').val();
	
	if(validateStrings(name) || validateStrings(pw)){
	var user = {
			username: name, 
			password: pw
	};
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		//get response body and console.log it 
		if(xhr.readyState==4 && xhr.status==200){
			var user = JSON.parse(xhr.responseText);
			console.log(xhr.getAllResponseHeaders());
			if(user == null){
				//not logged in -- tell user about invalid credentials 
				$('#message').html('Sorry! Invalid credentials!');
			}
			else{
				//logged in . do things 
				console.log(user);
				loadHomeView(user);
			}
		}
		
	}
	xhr.open("POST", "login");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(user));
	}
	else{
		//user entered null data or otherwise invalid strings. 
		$('#message').html('Please enter valid username and password!');
	}
}

//HOME VIEW

function loadHomeView(user){
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.responseText){
			$('#view').html(xhr.responseText);
			$('#name').html(user.username);
			$('#bio').html(user.bio);
		}
	}
	xhr.open("GET", "homepage.view");
	xhr.send();
	
}

//ADMIN PAGE
function loadLogView() {

	var name = $('#username').val();
	var pw = $('#password').val();
	
	if(validateStrings(name) || validateStrings(pw)){
	var user = {
			username: name, 
			password: pw
	};
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		//get response body and console.log it 
		if(xhr.readyState==4 && xhr.status==200){
			var user = JSON.parse(xhr.responseText);
			console.log(xhr.getAllResponseHeaders());
			if(user == null){
				//not logged in -- tell user about invalid credentials 
				$('#message').html('Sorry! Invalid credentials!');
			}
			else{
				//logged in . do things 
				console.log(user);
				loadHomeView(user);
			}
		}
		
	}
	xhr.open("GET", "login.view");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(user));
	}
	else{
		//user entered null data or otherwise invalid strings. 
		$('#message').html('Please enter valid username and password!');
	}
}

function loadAdminView(){
	console.log("Admin Clicked");
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			console.log("MOVING TO ADMIN PAGE");
			$('#view').html(xhr.responseText);
			$('#password').on('keydown',function(e){
				if(e.which == 13){
					loginUser();
				}
			});
			
			$('#submit_btn').on('click', loginUser);
		}
	}
	xhr.open("GET", "admin.view");
	xhr.send();
	console.log("SENT LOGIN REQ");
}

// ==== DATA TABLES (MANAGE) ====
function loadManage(){
	
	console.log("Table Clicked");
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			console.log("MOVING TO TABLE PAGE");
			$('#view').html(xhr.responseText);
			
			$('#password').on('keydown',function(e){
				if(e.which == 13){
					loginUser();
				}
			});
			
			$(document).ready(function() {
			    $('#myTable').DataTable();
			} );
			
			$('#submit_btn').on('click', loginUser);
		}
	}
	
	xhr.open("GET", "managereq.view");
	xhr.send();
	console.log("SENT LOGIN REQ");
}




// ==== SUBMIT REIMBURSEMENT ====
function loadSubmit(){
	console.log("Submit Clicked");
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			console.log("MOVING TO SUBMIT PAGE");
			$('#view').html(xhr.responseText);
			$('#password').on('keydown',function(e){
				if(e.which == 13){
					reimReq();
				}
			});
			
			$('#submit_btn').on('click', reimReq);
		}
	}
	xhr.open("GET", "submitreim.view");
	xhr.send();
	console.log("SENT LOGIN REQ");
}
//SEND REQUEST FOR REIMBURSEMENTS
function reimReq(){
	var username = $('#username').val();
	var amount = $('#amount').val();		
	var type = $('#type').val(); 	
	
	if(validString(amount)  && validString(username) && validString(type)){
		var reimbursement = {
			amount : amount,
			username : username,
			type : type
		};
	
	var xhr = new HttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState = 4 && xhr.status == 200){
			console.log('REQUEST FOR REIMBURSEMENT SENT');
			
		}
		else {
			console.log('SOMETHING WENT WRONG');
		}
	}
	xhr.open("POST", "submit");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(reimbursement));
	}
	else console.log('Please fill out all forms');
}

$(document).ready(function() {
    $('#example').DataTable();
} 
);

