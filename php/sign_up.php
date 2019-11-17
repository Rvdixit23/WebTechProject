<?php

$emailErr1=$fnameErr1=$lnameErr1=$phErr1=$dobErr1=$usernameErr1=$pswdErr1="";
$emailErr=$fnameErr=$lnameErr=$phErr=$dobErr=$usernameErr=$pswdErr="";
$email=$fname=$lname=$ph=$dob=$username=$pswd="";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["emailID"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["emailID"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr1 = "Invalid email format";
    }
  }

  if (empty($_POST["firstname"])) {
    $fnameErr = "FirstName is required";
  } else {
    $fname = test_input($_POST["firstname"]);
    if (!preg_match("/^[a-zA-Z]+$/",$fname)) {
        $fnameErr1 = "Only letters allowed"; 
    }
  }

  if (empty($_POST["lastname"])) {
    $lnameErr = "LastName is required";
  } else {
    $lname = test_input($_POST["lastname"]);
    if (!preg_match("/^[a-zA-Z]+$/",$lname)) {
        $lnameErr1 = "Only letters allowed"; 
    }
  }

  if (empty($_POST["phoneNumber"])) {
    $phErr = "Phone number is required";
  } else {
    $ph = test_input($_POST["phoneNumber"]);
    if (!preg_match("/^[0-9]+$/",$ph)) {
        $phErr1 = "Only numbers allowed"; 
    }
  }

  if (empty($_POST["dateOfBirth"])) {
    $dobErr = "DOB is required";
  } else {
    $dob = test_input($_POST["dateOfBirth"]);
    if(!preg_match('/^([0-9]{1,2})\\/([0-9]{1,2})\\/([0-9]{4})$/')) {
        $dobErr1= "Not in correct format";
    }
  }
  
  if (empty($_POST["username"])) {
    $usernameErr = "Username is required";
  } else {
    $username = test_input($_POST["username"]);
    if(!preg_match("/^[0-9a-zA-Z]+$/")) {
        $usernameErr1= "Only numbers and letters allowed"
    }
  }

  if (empty($_POST["password"])) {
    $pswdErr = "Password is required";
  } else {
    $pswd = test_input($_POST["password"]);
    if(!preg_match("/^[0-9a-zA-Z]+$/")) {
        $usernameErr1= "Only numbers and letters allowed"
    }
  }
}
?>
