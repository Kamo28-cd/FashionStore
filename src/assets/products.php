<?php
include('./classes/DB.php');

		$r_type = $_GET['response'];
		//$token = $_COOKIE['SNID'];
		if ($r_type == 'all') {
		
		$output = "";

		//$user_id = DB::query('SELECT user_id FROM login_token WHERE token=:token', array(':token'=>sha1($token)))[0]['user_id'];
		
		$cartproducts = DB::query('SELECT id, title, description,details, price, checkoutprice,shipping, image, color_variant AS colorvariant, size_variant AS sizevariant, in_stock FROM products');
		$output .= "[";
			foreach($cartproducts as $cart) {
				
				$output .= "{";
					$output .= '"id": '.$cart['id'].',';
					$output .= '"title": "'.$cart['title'].'",';
					$output .= '"description": "'.$cart['description'].'",';
					$output .= '"details": "'.$cart['details'].'",';
					$output .= '"price": '.$cart['price'].',';
					$output .= '"checkoutprice": '.$cart['checkoutprice'].',';
					$output .= '"shipping": '.$cart['shipping'].',';
					$output .= '"image": "'.$cart['image'].'",';
					$output .= '"colorvariant": '.$cart['colorvariant'].',';
					$output .= '"sizevariant": '.$cart['sizevariant'].',';
					$output .= '"in_stock": "'.$cart['in_stock'].'"';
					
				$output .= "},";
				
				}
		
		
		$output = substr($output, 0, strlen($output)-1);
		
		$output .= "]";

		echo json_encode($cartproducts);
		} else if ($r_type =='detail') {
		$product_id = $_GET['id'];
			$output = "";
			
		//$user_id = DB::query('SELECT user_id FROM login_token WHERE token=:token', array(':token'=>sha1($token)))[0]['user_id'];
		$cartproducts = DB::query('SELECT id, title, description,details, price, checkoutprice,shipping, image, color_variant AS colorvariant, size_variant AS sizevariant, in_stock FROM products WHERE id=:productid', array(':productid'=>$product_id));
		$cartproducts2 = DB::query('SELECT id, title, description,details, price, checkoutprice,shipping, image, in_stock, color_variant AS colorvariant, size_variant AS sizevariant FROM products WHERE id=:productid', array(':productid'=>$product_id))[0];
		$output .= "[";
			foreach($cartproducts as $cart) {
				
				$output .= "{";
					$output .= '"id": '.$cart['id'].',';
					$output .= '"title": "'.$cart['title'].'",';
					$output .= '"description": "'.$cart['description'].'",';
					$output .= '"details": "'.$cart['details'].'",';
					$output .= '"price": '.$cart['price'].',';
					$output .= '"checkoutprice": '.$cart['checkoutprice'].',';
					$output .= '"shipping": '.$cart['shipping'].',';
					$output .= '"image": "'.$cart['image'].'",';
					$output .= '"colorvariant": '.$cart['colorvariant'].',';
					$output .= '"sizevariant": '.$cart['sizevariant'].',';
					$output .= '"in_stock": "'.$cart['in_stock'].'"';
					
					
				$output .= "},";
				
				}
		
		
		$output = substr($output, 0, strlen($output)-1);
		
		$output .= "]";
		//echo $output;
		echo json_encode($cartproducts2);
		
		} else if ($r_type =='size') {
			$product_id = $_GET['id'];
			$productsizes = DB::query('SELECT id, product_id, size_id, size_price, in_stock FROM size_lookup WHERE product_id=:productid', array(':productid'=>$product_id));
			$output = "";
			$output .= "[";
			foreach($productsizes as $sizes) {
				$size_id = $sizes['size_id'];
				$sizedetails = DB::query('SELECT size_name FROM size WHERE id=:sizeid', array(':sizeid'=>$size_id))[0]['size_name'];
				$product_name = DB::query('SELECT title FROM products WHERE id=:productid', array(':productid'=>$product_id))[0]['title'];
				$output .= "{";
					$output .= '"size_id": '.$sizes['size_id'].',';
					$output .= '"size_name": "'.$sizedetails.'",';
					$output .= '"size_price": '.$sizes['size_price'].',';
					$output .= '"product_id": '.$product_id.',';
					$output .= '"product_name": "'.$product_name.'",';
					$output .= '"in_stock": "'.$sizes['in_stock'].'"';
					
				$output .= "},";
				
				}
		
		
			$output = substr($output, 0, strlen($output)-1);
		
			$output .= "]";
			echo $output;
			//echo json_encode($productsizes);
		} else if ($r_type =='color') {
			$product_id = $_GET['id'];
			$productcolor = DB::query('SELECT id, product_id, color_id, in_stock FROM color_lookup WHERE product_id=:productid', array(':productid'=>$product_id));
			$output = "";
			$output .= "[";
			foreach($productcolor as $colors) {
				$color_id = $colors['color_id'];
				$colordetails = DB::query('SELECT color_name,color_code FROM color WHERE id=:colorid', array(':colorid'=>$color_id))[0];
				$product_name = DB::query('SELECT title FROM products WHERE id=:productid', array(':productid'=>$product_id))[0]['title'];
				$output .= "{";
					$output .= '"color_id": '.$colors['color_id'].',';
					$output .= '"color_name": "'.$colordetails['color_name'].'",';
					$output .= '"color_code": "'.$colordetails['color_code'].'",';
					$output .= '"product_id": '.$product_id.',';
					$output .= '"product_name": "'.$product_name.'",';
					$output .= '"in_stock": "'.$colors['in_stock'].'"';
					
				$output .= "},";
				
				}
		
		
			$output = substr($output, 0, strlen($output)-1);
		
			$output .= "]";
			echo $output;
			//echo json_encode($productcolor);
		} else if ($r_type =='color_dbl') {
			$product_id = $_GET['id'];
			$productcolor = DB::query('SELECT id, product_id, color_id, in_stock FROM color_dbl_lookup WHERE product_id=:productid', array(':productid'=>$product_id));
			$output = "";
			$output .= "[";
			foreach($productcolor as $colors) {
				$color_id = $colors['color_id'];
				$colordetails = DB::query('SELECT color_name,color_code_1,color_code_2 FROM color_dbl WHERE id=:colorid', array(':colorid'=>$color_id))[0];
				$product_name = DB::query('SELECT title FROM products WHERE id=:productid', array(':productid'=>$product_id))[0]['title'];
				$output .= "{";
					$output .= '"color_id": '.$colors['color_id'].',';
					$output .= '"color_name": "'.$colordetails['color_name'].'",';
					$output .= '"color_code_1": "'.$colordetails['color_code_1'].'",';
					$output .= '"color_code_2": "'.$colordetails['color_code_2'].'",';
					$output .= '"product_id": '.$product_id.',';
					$output .= '"product_name": "'.$product_name.'",';
					$output .= '"in_stock": "'.$colors['in_stock'].'"';
					
				$output .= "},";
				
				}
		
		
			$output = substr($output, 0, strlen($output)-1);
		
			$output .= "]";
			echo $output;
			//echo json_encode($productcolor);
		} else if ($r_type =='image') {	
			$product_id = $_GET['id'];
			$productimage = DB::query('SELECT id, product_id, image_id FROM image_lookup WHERE product_id=:productid', array(':productid'=>$product_id));
			$output = "";
			$output .= "[";
			foreach($productimage as $images) {
				$image_id = $images['image_id'];
				$imagedetails = DB::query('SELECT image FROM image_var WHERE id=:imageid', array(':imageid'=>$image_id))[0];
				$product_name = DB::query('SELECT title FROM products WHERE id=:productid', array(':productid'=>$product_id))[0]['title'];
				$output .= "{";
					$output .= '"image_id": '.$images['image_id'].',';
					$output .= '"image_path": "'.$imagedetails['image'].'",';
					$output .= '"product_id": '.$product_id.',';
					$output .= '"product_name": "'.$product_name.'"';
					
				$output .= "},";
				
				}
		
		
			$output = substr($output, 0, strlen($output)-1);
		
			$output .= "]";
			echo $output;
			//echo json_encode($productimage);
		}
?>