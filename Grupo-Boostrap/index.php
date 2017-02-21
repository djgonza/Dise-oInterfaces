<?php 

define ("PATH_BASE", "/boostrap"); //Editar al cambiar de directorio
define ("PATH_SECTION", split("/boostrap", $_SERVER["REQUEST_URI"])[1]);

include "views/head.html"; 
include "views/header.php";

	var_dump(PATH_SECTION);
	var_dump("views".PATH_SECTION.".php");
	var_dump(file_exists("views".PATH_SECTION.".php"));

	if (PATH_SECTION == "/"){
		include "views/inicio.php";
		exit(); 
	}

	if (file_exists("views".PATH_SECTION.".php")) {

		include "views".PATH_SECTION.".php";
		exit();

	}

	if (file_exists("views".PATH_SECTION.".html")) {

		include "views".PATH_SECTION.".html";
		exit();

	}

	include "views/404.html";



include "views/footer.html"; 

?>

