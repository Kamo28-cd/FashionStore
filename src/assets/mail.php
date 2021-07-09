<?php 
include('./classes/DB.php');
include('./classes/Mail.php');
	$r_type = $_GET['response'];
if ($r_type =='contact') {
	//users
	$postBody = file_get_contents("php://input");
	$postBody = json_decode($postBody);
	$myEmail = 'info@example.co.za';	
	$name = $postBody->name;
	$email = $postBody->email;
	$subject = $postBody->subject;
	$message = $postBody->message;
	//DB::query('INSERT INTO interested_users VALUES(\'\', :email, \'\', NOW())', array(':email'=>$email));
	//if (DB::query('SELECT id FROM interested_users WHERE email=:email', array(':email'=>$email))) {
	Mail::sendMail('Welcome','<h2 style="font-weight:bolder">Hi '.$name.', Thanks for contacting us </h2> <br><p>Well get back to you as soon as possible</p> <br/><div>Good Care Good Hair Team</div>', $email);

	Mail::sendMail($subject,'<h2 style="font-weight:bolder">You have a new enquiry from your website</h2> <br>Name: '.$name.' <br>Email: '.$email.' <br>Message: <br>'.$message.' <hr>',$myEmail);
	//}

} else if ($r_type =='checkout') {
	$postBody = file_get_contents("php://input");
	$postBody = json_decode($postBody);
	$myEmail = 'orders@example.co.za';
	
	$name = $postBody->name;
	$surname = $postBody->surname;
	$email = $postBody->email;
	$number = $postBody->number;
	$address = $postBody->address;
	$requests = $postBody->requests;
	$order_name = $postBody->order_name; 
	$order_price = $postBody->order_price; 
	$order_shipping = $postBody->order_shipping;
	$order_quantity = $postBody->order_quantity;
	$order_product_id = $postBody->order_id;
	$order_color = $postBody->order_color;
	$order_size = $postBody->order_size;

	DB::query('INSERT INTO orders VALUES(\'\',:name, :surname, :email, :number, :address,:requests, :order_name,:order_price,:order_shipping,:order_quantity,:order_product_id,:order_color,:order_size, NOW())', array(':name'=>$name, ':surname'=>$surname, ':email'=>$email, ':number'=>$number, ':address'=>$address, ':requests'=>$requests, ':order_name'=>$order_name, ':order_price'=>$order_price, ':order_shipping'=>$order_shipping, ':order_quantity'=>$order_quantity, ':order_product_id'=>$order_product_id, ':order_color'=>$order_color, ':order_size'=>$order_size));
		//if (DB::query('SELECT id FROM interested_users WHERE email=:email', array(':email'=>$email))) {
		Mail::sendMail('New Order','<h2 style="font-weight:bolder">Hi '.$name.', Congratulations on your purchase </h2> <br><p>Our sales representatives will be in contact with further instructions</p> For payment our banking details are as follows:<br>Bank: <p style="font-weight:700">Bank</p> <br>Account Number: <p style="font-weight:700">0123 456 789</p> <br>Branch Code: <p style="font-weight:700">123456</p><br>Account Type:<p style="font-weight:700">Current Account</p> <br/><div>Our Team Team</div>', $email);

		Mail::sendMail('New Order Notification','<h2 style="font-weight:bolder">You have a new order on your website</h2> <br>Name: '.$name.' <br>Surname: '.$surname.' <br>Email: '.$email.' <br>Number: '.$number.' <br>Address: <br>'.$address.' <br>Requests: '.$requests.' <br>Product: '.$order_name.'<br>Price: '.$order_price.'<br>Shipping: '.$order_shipping.'<br>Quantity: '.$order_quantity.'<br>Color: '.$order_color.'<br>Size: '.$order_size.'<br>Date: '.$order_date.'<hr>',$myEmail);
	
}

?>