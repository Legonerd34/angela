<?php
    $name=$_POST['name']
    $visitor_email=$_POST['email']
    $message=$_POST['message']


    $email_from= 'angelagreenwood34@yahoo.com'

    $email_subject= "website enquiry"

    $email_body= "User Name: $name.\n".
                   "User Email: $visitor_email.\n";



    $to= "angelagreenwood34@yahoo.com";

    $headers= "from: $email_from \r\n";

    $headers= "reply-to $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html");
?>
