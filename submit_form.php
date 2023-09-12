<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  $to = "your@email.com"; // Your email address
  $subject = "Portfolio Contact Form Submission";
  $headers = "From: $email";
  
  mail($to, $subject, $message, $headers);
  
  // Redirect to a thank you page or display a success message
  header("Location: thank_you.html");
  exit();
}
?>
