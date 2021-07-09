<?php
require_once('PHPMailer/PHPMailerAutoload.php');
class Mail {
	public static function sendMail($subject,$body,$address) {
		$email = new PHPMailer();
		$email->SMTPDebug = 2;
		$email->IsSMTP();
		$email->SMTPAuth = true;
		$email->SMTPSecure = 'tls';
		$email->Host = 'mail.example.co.za'; 
		$email->Port = '587';
		$email->IsHTML(true);
		$email->Username = 'info@example.co.za';
		$email->Password = 'password123';
		$email->From = 'info@example.co.za';
		$email->FromName = 'Your Name';
		$email->Subject = $subject;
		$email->Body = $body;
		$email->AddAddress($address);
		$email->CharSet = "UTF-8";


		if(!$email->Send()) {
			$error = "Error while processing, Please try again later...";
			echo $error;
			return $error;
		} else {
			$error = "Thank you, your email has been sent";
			echo $error;
			return $error;
		}
		
	}

}

?>