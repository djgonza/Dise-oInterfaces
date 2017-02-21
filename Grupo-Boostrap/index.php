<?php 

define ("PATH_BASE", "/boostrap");
define ("PATH_SECTION", split("/boostrap", $_SERVER["REQUEST_URI"])[1]);

include "views/head.html"; 
include "views/header.php";


	if (file_exists("views/".PATH_SECTION.".html")) {
		
		include "views/".PATH_SECTION.".html";

	}else if (file_exists("views/".PATH_SECTION.".php")) {
		
		include "views/".PATH_SECTION.".php";

	}else if(PATH_SECTION == "/") {

		include "views/inicio.php";

	}else{

		include "views/404.html";

	}

include "views/footer.html"; 

?>

