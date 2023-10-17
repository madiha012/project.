function sub(){
  var username = document.getElementById("name").value
  var useremail = document.getElementById("email").value
  var userpassword = document.getElementById("password").value
  var usernumber = document.getElementById("number").value
  var usermassage = document.getElementById("Massage").value
  if (username == "") {
      document.getElementById("nameerror").innerHTML = "*Write your name"
  }
  else if (useremail == "") {
      document.getElementById("emailerror").innerHTML = "*Write your email"
      document.getElementById("nameerror").innerHTML = ""
  }
  else if (userpassword == "") {
      document.getElementById("passworderror").innerHTML = "*Write your password"
      document.getElementById("nameerror").innerHTML = ""
      document.getElementById("emailerror").innerHTML = ""
  }
  else if (usernumber == "") {
      document.getElementById("numbererror").innerHTML = "*Write your number"
      document.getElementById("nameerror").innerHTML = ""
      document.getElementById("passworderror").innerHTML = ""
      document.getElementById("emailerror").innerHTML = ""
  }
  else if (usermassage == "") {
      document.getElementById("messageerror").innerHTML = "*Write your message"
      document.getElementById("nameerror").innerHTML = ""
      document.getElementById("passworderror").innerHTML = ""
      document.getElementById("emailerror").innerHTML = ""
      document.getElementById("numbererror").innerHTML = ""
  }
   else {
      localStorage.setItem("Name", username)
      localStorage.setItem("Email", useremail)
      localStorage.setItem("Password", userpassword)
      localStorage.setItem("Number", usernumber)
      localStorage.setItem("Massage", usermassage)
      alert("Thankyou for your submission : "+ localStorage.getItem("Name"))
    }}


    



  
