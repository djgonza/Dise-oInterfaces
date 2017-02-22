<?php 

include "views/head.html"; 
include "views/header.php";

	if ($_SERVER["REQUEST_URI"] == "/"){
		include "views/inicio.php";
		exit(); 
	}

	if (file_exists("views".$_SERVER["REQUEST_URI"].".php")) {

		include "views".$_SERVER["REQUEST_URI"].".php";
		exit();

	}

	if (file_exists("views".$_SERVER["REQUEST_URI"].".html")) {

		include "views".$_SERVER["REQUEST_URI"].".html";
		exit();

	}

	include "views/404.html";



include "views/footer.html"; 

?>

