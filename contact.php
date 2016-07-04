<?php
if (isset($_POST['email'])) {
  $email_to = "jeffreyysy@gmail.com";
  $email_subject = "website contact";
  $email_from = "website";


function died($error) {
  echo "We are sorry, but there were error(s) found with the form you submitted.";
  echo "these errors appear below. <br/><br/>";
  echo $error. "<br/><br/>";
  echo "Please go back and fix these errors.<br/>";
  die();
}

if(!isset($_POST['name']) ||
!isset($_POST['email']) ||
!isset($_POST['comments'])) {
died('We are sorry but there appears to be a problem with the form you submitted.');
}


$name = $_POST['name'];
$email = $_POST['email'];
$comments = $_POST['comments'];

$error_message = "";
$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
if(!preg_match($email_exp, $email)) {
  $error_message .='The email address you entered does not
  appear to be valid.<br/>';
}
$string_exp = "/^[A-Za-z.'-]+$/";
if (!preg_match($string_exp, $name)) {
  $error_message .= 'The Name you entered does not appear to be valid.</br>';
}

if(strlen($comments) < 2) {
  $error_message .='The comments you entered do not appear to be valid.</br>';
}

if(strleng($error_message) > 0 ) {
  died($error_message);
}
$email_message = "Form Details below.\n\n";

function clean_string ($string) {
  $bad = array("content-type", "bcc:", "to:", "cc:",
"href");
return str_replace($bad, "", $string);
}
$email_message .= "NAME:" . clean_string($name) . "\n";
$email_message .= "Email:" . clean_string($email) . "\n";
$email_message .= "Comments:" . clean_string($comments) . "\n";

$headers = 'From: ' .$email_From . "\r\n". 'Reply-To:' .
$email. "\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail ($email_to, $email_subject, $email_message, $headers);

?>

<?php
}
?>
