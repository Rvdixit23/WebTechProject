<?php
  $email = $_GET['emailID'];
  $password = $_GET['password'];
  
  setcookie("username", "", time()- 60, "/","", 0);
  setcookie("_xsrf", "", time()- 60, "/","", 0);
  setcookie("PHPSESSID", "", time()- 60, "/","", 0);
  setcookie("Username", "", time()- 60, "/","", 0);
  setcookie("csrftoken", "", time()- 60, "/","", 0);
  setcookie("path", "", time()- 60, "/","", 0);
  setcookie("name", "", time()- 60, "/","", 0);

  // session_start();

  $serverName = "localhost";
  $serverUserName = "root";
  $serverPassword = "";
  $databaseName = "users";
  // $cookie_value = "";

  $loggedIn = "0";

  $conn = mysqli_connect($serverName, $serverUserName, $serverPassword, $databaseName);
  //Creates a connection object to the database for queries

  if (!$conn) {//If the connection fails
    die("ERROR : ".mysqli_connect_error());
  }
  $sql = "SELECT username FROM users WHERE emailID = '$email' and password = '$password';";
  $result = mysqli_query($conn ,$sql);//Database object and Sql query passed to the query function
  $row = mysqli_fetch_array($result,MYSQLI_ASSOC); //Converting database result object to a single row which you can index
  // $active = $row['active'];

  $count = mysqli_num_rows($result);
  
  
  if($count == 1) {
    // session_register("$email");
    // $_SESSION['login_user'] = $email;
    $cookie_key = "name";
    $cookie_value = $row['username'];
    setcookie($cookie_key, $cookie_value, time() + (86400 * 30), "/");
    echo "Logged in Sucessfully";
    $loggedIn = "1";
    
    header("location: ../index.html");//Redirects the page to index.html
 }else {
    $error = "YOUR LOGIN NAME OR PASSWORD IS INVALID";
    echo $error;
 }
  $var = "/";
  // setcookie($cookie_key, $cookie_value, time() + (86400 * 30), "/");
  setcookie("path", $var, time() + (86400 * 30), "/");
?>