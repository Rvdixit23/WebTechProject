<?php
  $email = $_GET['emailID'];
  $password = $_GET['password'];
  
  // session_start();

  $serverName = "localhost";
  $serverUserName = "root";
  $serverPassword = "";
  $databaseName = "users";

  $loggedIn = "0";

  $conn = mysqli_connect($serverName, $serverUserName, $serverPassword, $databaseName);
  if (!$conn) {
    die("ERROR : ".mysqli_connect_error());
  }
  $sql = "SELECT username FROM users WHERE emailID = '$email' and password = '$password';";
  $result = mysqli_query($conn ,$sql);
  $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
  // $active = $row['active'];

  $count = mysqli_num_rows($result);
  
  
  if($count == 1) {
    // session_register("$email");
    // $_SESSION['login_user'] = $email;
    $cookie_key = "Username";
    $cookie_value = $row['username'];
    setcookie($cookie_key, $cookie_value, time() + (86400 * 30), "/");
    echo "Logged in Sucessfully";
    $loggedIn = "1";
    
    header("location: ../index.html");
 }else {
    $error = "YOUR LOGIN NAME OR PASSWORD IS INVALID";
    echo $error;
 }
  setcookie("loggedIn", $loggedIn, time() + (86400 * 30), "/");
?>
