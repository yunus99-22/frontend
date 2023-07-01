document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("loginFormContainer").style.display = "block";
  });
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if username and password are correct (dummy check)
    if (username === "admin" && password === "password") {
      window.location.href = "manager1.html";
    } else {
      alert("Invalid username or password");
    }
  });
  