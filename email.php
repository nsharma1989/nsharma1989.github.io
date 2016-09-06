<?php
    $msg_from = $_POST['msg_from'];
    $name = mysql_real_escape_string($_POST['name']);

if(strpos($name,'cei')!== FALSE){
    echo "fail";
    //die;
}
else
{

if($msg_from == "contact")
{
    
	$phone = mysql_real_escape_string($_POST['phone']);	
	$email = mysql_real_escape_string($_POST['email']);
    $msg = mysql_real_escape_string($_POST['message']);
    $e_subject = "KnowRoaming Enquiry Recieved";
    $e_message = "
    <html>
    <table border=\"0\" cellpadding=\"0\" width=\"700\" cellspacing=\"0\">
			<tr><td colspan=\"3\" >
            <font size=\"+1\" color=\"#1d4961\"><Strong>Enquiry Recieved</Strong></font>
            </td></tr>
				
				<tr>			
				<td colspan=\"3\" >&nbsp;</td>
				</tr>
				<tr>				
				<td colspan=\"3\" >&nbsp;</td>				
				</tr>				
				<tr><td colspan=\"3\" width=\"150\" ><strong>You Have Recieved an Enquiry,</strong></td></tr>				
				<tr><td></td><td></td><td>&nbsp;</td></tr>
				<tr><td width=\"150\" ><strong>Name</strong></td><td >:</td><td >&nbsp;$name</td></tr>
				
				<tr><td><strong>Phone</strong></td><td>:</td><td>&nbsp;$phone</td></tr>
				
				<tr><td><strong>Email</strong></td><td>:</td><td>&nbsp;$email</td></tr>
				<tr><td><strong>Message</strong></td><td>:</td><td>&nbsp;$msg</td></tr>
							
				<tr><td></td><td></td><td>&nbsp;</td></tr>
							
				<tr><td></td><td></td><td>&nbsp;</td></tr>
						
				</table>
				
				</html>";
    
     //Write action to txt log
    $log  = "Submission: Contact Us".' - '.date("F j, Y, g:i a").PHP_EOL.
            "User: ".$name.PHP_EOL.
            "Email: ".$email.PHP_EOL.
            "Phone: ".$phone.PHP_EOL.
            "-------------------------".PHP_EOL;
    //
    
    file_put_contents('contact.txt', $log, FILE_APPEND);

}
else
{
	$phone = mysql_real_escape_string($_POST['phone']);	
	$email = mysql_real_escape_string($_POST['email']);
    $address = mysql_real_escape_string($_POST['address']);
    $country = mysql_real_escape_string($_POST['country']);
    $model = mysql_real_escape_string($_POST['model']);
    
    $e_subject = "KnowRoaming Application Recieved";
   $e_message = "
    <html>
    <table border=\"0\" cellpadding=\"0\" width=\"700\" cellspacing=\"0\">
			<tr><td colspan=\"3\" >
            <font size=\"+1\" color=\"#1d4961\"><Strong>Application Recieved</Strong></font>
            </td></tr>
				
				<tr>			
				<td colspan=\"3\" >&nbsp;</td>
				</tr>
				<tr>				
				<td colspan=\"3\" >&nbsp;</td>				
				</tr>				
				<tr><td colspan=\"3\" width=\"150\" ><strong>You Have Recieved an Application,</strong></td></tr>				
				<tr><td></td><td></td><td>&nbsp;</td></tr>
				<tr><td width=\"150\" ><strong>Name</strong></td><td >:</td><td >&nbsp;$name</td></tr>
				
				<tr><td><strong>Phone</strong></td><td>:</td><td>&nbsp;$phone</td></tr>
                <tr><td><strong>Model</strong></td><td>:</td><td>&nbsp;$model</td></tr>				
				<tr><td><strong>Email</strong></td><td>:</td><td>&nbsp;$email</td></tr>
				<tr><td><strong>Address</strong></td><td>:</td><td>&nbsp;$address</td></tr>
                <tr><td><strong>Country</strong></td><td>:</td><td>&nbsp;$country</td></tr>
                
							
				<tr><td></td><td></td><td>&nbsp;</td></tr>
							
				<tr><td></td><td></td><td>&nbsp;</td></tr>
						
				</table>
				
				</html>";
    
     //Write action to txt log
    $log  = "Submission: Apply Now".' - '.date("F j, Y, g:i a").PHP_EOL.
            "User: ".$name.PHP_EOL.
            "Email: ".$email.PHP_EOL.
            "Phone: ".$phone.PHP_EOL.
            "Phone Model: ".$model.PHP_EOL.
            "Country: ".$country.PHP_EOL.
            "Address: ".$address.PHP_EOL.
        "Phone: ".$phone.PHP_EOL.
            "-------------------------".PHP_EOL;
    //
    
    file_put_contents('applynow.txt', $log, FILE_APPEND);

}				
				$message = $e_message;
                $to = "jobs@knowroaming.com";
                $from = $email; 					
				//$to = "ns1910@gmail.com";				
				$subject = $e_subject;								
				$headers  = "MIME-Version: 1.0" ."\r\n";				
				$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
                $headers .= "From:$from <$from>"."\r\n";
				$success = mail($to,$subject,$message,$headers);
                
if($success)
{
    echo "success";
}
else
{
    echo "fail";
}
}
?>