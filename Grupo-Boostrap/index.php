<?php 

//var_dump($_SERVER);
define ("ABSOLUTE_PATH", $_SERVER['REQUEST_SCHEME']."://".$_SERVER['SERVER_NAME']."/boostrap/");
define ("BASE_PATH", "/boostrap/");
//var_dump(ABSOLUTE_PATH);
//var_dump("views/".split(BASE_PATH, $_SERVER["REQUEST_URI"])[1].".php");

include "views/head.php"; 
include "views/header.php";

	if ($_SERVER["REQUEST_URI"] == BASE_PATH){

		include "views/inicio.php";

	}else if (file_exists("views/".split(BASE_PATH, $_SERVER["REQUEST_URI"])[1].".php")) {

		include "views/".split(BASE_PATH, $_SERVER["REQUEST_URI"])[1].".php";

	}else{

		include "views/404.php";

	}

include "views/footer.php"; 

?>

