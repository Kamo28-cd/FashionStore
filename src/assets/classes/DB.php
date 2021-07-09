<?php 
 
class DB {
	
	private static function connect() {
		//$pdo = new PDO('mysql:host=localhost;dbname=goodcare_goodhair;charset=utf8', 'goodcare_goodhair', 'g17COb3gg5');
		$pdo = new PDO('mysql:host=127.0.0.1;dbname=goodcare;charset=utf8', 'kamo', 'Epsilion28');
		$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		return $pdo;
	}
	
	public static function query($query, $params = array()) {
		$statement = self::connect()->prepare($query);
		$statement->execute($params);
		
		if (explode(' ', $query)[0] == 'SELECT') {
		$data = $statement->fetchAll();
		return $data;
		}


	}
}

?>