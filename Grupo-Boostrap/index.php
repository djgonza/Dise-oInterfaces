<?php 

include "views/head.html"; 
include "views/header.html";

?>

<?php 

	$url = split("/", $_SERVER["REQUEST_URI"]);

	if (file_exists("views/$url[2].html")) {
		
		include "views/$url[2].html";

	}else{

		include "views/404.html";

	}

?>

<?php include "views/footer.html"; ?>

