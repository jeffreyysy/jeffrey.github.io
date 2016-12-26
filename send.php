<?php

$name = $_ POST['name'];
$reqest = $_POST['request'];

$to = "jimmydfal@gmail.com";
$subject = "tutorial request";
$body = "this is an automated message. Please dont don't reply. \n \n $request";

mail ($to,$subject,$body);

echo "Message Sent! <a href='index.html'>Click here to send another email</a>";



?>
