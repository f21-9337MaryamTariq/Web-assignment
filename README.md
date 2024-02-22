Question no 1:
 Kindly see this repository link 
https://github.com/f21-9337MaryamTariq/Web-assignment
Here is branch link for assignment 1:
https://github.com/f21-9337MaryamTariq/Web-assignment/tree/f21-9337_web_Assignment-01
Here is branch link for class tasks:
https://github.com/f21-9337MaryamTariq/Web-assignment/tree/ClassActivities
You can move to these link by ctrl + click to follow link.
Question no 2:
<!DOCTYPE html>
<html>
<head>
  <title>Sign In / Sign Out</title>
  <style>
    /* Styles remain the same */
  </style>
</head>
<body>

<div class="container">
  <h4>Welcome TO OUR SITE</h4>
  <!-- 1. Identify required fields. -->
  <form id="signInForm" onsubmit="return signIn()">
    Username: <input type="text" id="username" required><br>
    Password: <input type="password" id="password" required><br>
    Birthdate: <input type="date" id="birthdate" required><br> <!-- Date input field -->
    <input type="submit" value="Sign In">
  </form>

  <h4 id="signInMessage" style="display: none;">THANKS FOR SIGNING IN </h4>
  <form id="signOutForm" onsubmit="return signOut()">
    <input type="submit" value="Sign Out">
  </form>
</div>

<script>
function signIn() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var birthdate = document.getElementById("birthdate").value;
  
  if (username.trim() === "") {
    alert("Please enter your username.");
    return false;
  }

  if (password.trim() === "") {
    alert("Please enter your password.");
    return false;
  }

  if (birthdate.trim() === "") {
    alert("Please enter your birthdate.");
    return false;
  }

  // Validate input data length
  if (username.length < 5) {
    alert("Username must be at least 5 characters long.");
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  // Validate date input
  var today = new Date();
  var inputDate = new Date(birthdate);
  if (inputDate >= today) {
    alert("Please enter a valid birthdate.");
    return false;
  }

  // Use pattern matching with regular expressions
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    alert("Username can only contain letters and numbers.");
    return false;
  }

  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    alert("Password can only contain letters and numbers.");
    return false;
  }

  // Provide clear error messages (already done)

  // Thoroughly test validation process
  console.log("Username:", username);
  console.log("Password:", password);
  console.log("Birthdate:", birthdate);
  console.log("Validation passed.");

  document.getElementById("signInMessage").style.display = "block"; // Show the message
  return false; // Prevent form submission
}
</script>

</body>
</html>
 
Question no 3:
index:
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/css/bootstrap.min.css" rel="stylesheet">
<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #ffe4b2;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 100vh;
  }
  .container-fluid {
    margin-top: 50px;
    margin-left: 50px;
  }
  .welcome-heading {
    background-color: purple;
    color: white;
    padding: 40px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .purple-button {
    background-color: blue;
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 5px;
    text-decoration: none;
    width: 100%;
    max-width: 800px;
    display: inline-block;
    margin-top: 20px;
  }
  .purple-button:hover {
    background-color: #0056b3;
  }
  .card-container {
    background-color: #d8baf9;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
  }
  .card {
    margin-bottom: 20px;
  }
</style>
</head>
<body>

<div class="container-fluid">
  <h1 class="welcome-heading">Welcome to our website</h1>
  <a href="description.html" class="btn btn-primary purple-button">Learn More</a>
  
  <div class="card-container">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <h5 class="card-title">Tulip</h5>
          <img src="tulip.jpg" class="card-img-top" alt="Tulip Image">
          <div class="card-body">
            Tulips are known for their vibrant colors and simple beauty. They are often associated with spring and symbolize perfect love.
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <h5 class="card-title">Rose</h5>
          <img src="rose.jpg" class="card-img-top" alt="Rose Image">
          <div class="card-body">
            Roses are one of the most popular and recognizable flowers. They symbolize love, beauty, and romance.
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <h5 class="card-title">Jasmine</h5>
          <img src="jasmine.jpg" class="card-img-top" alt="Jasmine Image">
          <div class="card-body">
            Jasmine flowers are known for their sweet fragrance. They are often used in perfumes and teas.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
decription:
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Description</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/css/bootstrap.min.css" rel="stylesheet">
<style>
  body {
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
  }
</style>
</head>
<body>

<div class="container">
  <h2>Description of our website</h2>
  <p>webpage</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
