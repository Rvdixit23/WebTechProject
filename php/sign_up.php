<?PHP
  $email = $_GET['emailID'];
  $firstName = $_GET['firstName'];
  $lastName = $_GET['lastName'];
  $phoneNumber = $_GET['phoneNumber'];
  $dateOfBirth = $_GET['dateOfBirth'];
  $username = $_GET['username'];
  $password1 = $_GET['password'];
  $password2 = $_GET['repassword'];

  $serverName = "localhost";
  $serverUserName = "root";
  $serverPassword = "";
  $databaseName = "users";

  $conn = mysqli_connect($serverName, $serverUserName, $serverPassword, $databaseName);
  if (!$conn) {
    die("ERROR : ".mysqli_connect_error());
  }
  if ($password1 == $password2) {
    $query = "INSERT INTO `users`(`emailID`, `firstName`, `lastName`, `phoneNumber`, `dateOfBirth`, `username`, `password`) VALUES ('$email', '$firstName', '$lastName', '$phoneNumber', '$dateOfBirth', '$username', '$password1');";  
    if (mysqli_query($conn, $query)) {
      echo "Registration completed";
      $loginSuccess = 1;
      header("location: ../index.html");
    }
    else {
      echo "Something went wrong";
    }
  }
  else {
    echo "ERROR : PASSWORD DID NOT MATCH";
  }
  
  mysqli_close($conn);

  echo $email;
  echo $firstName;
  echo $lastName;
  echo $phoneNumber;
  echo $dateOfBirth;
  echo $username;
  echo $password1;
  echo $password2;
?>