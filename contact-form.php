<?php

$name = $_POST["name"];
$visitor_email = $_POST["email"];
$visitor_phone = $_POST["phonenumber"];
$message = $_POST["message"];


$email_from = "developmentstage.co";
$email_subject = "Developmentstage.co | Email from $name";
$email_body = 
"Client Name : $name.\n".
"Client Email : $email.\n".
"Contact Number : $visitor_phone.\n".
"Client Name : $message.\n".

$to = "coderedblues@gmail.com";

$headers = "From: $email_from \r\n";
$headers = "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);


header("Location:index.html")
?>