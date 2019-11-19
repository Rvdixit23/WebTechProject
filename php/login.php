<?php
$email=$pswd="";
$pswdErr=$emailErr="";
$pswdErr1=$emailErr1="";
$
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["emailID"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["emailID"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr1 = "Invalid email format";
    }
  }

  if (empty($_POST["password"])) {
    $pswdErr = "Password is required";
  } else {
    $pswd = test_input($_POST["password"]);
    if(!preg_match("/^[0-9a-zA-Z]+$/")) {
        $pswdErr1= "Only numbers and letters allowed"
    }
  }
}
?>
