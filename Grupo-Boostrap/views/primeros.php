<section id="contenido_principal">

	<?php

	$dir = "views/recetas/primeros/";

	if (is_dir($dir)){

		if ($dh = opendir($dir)){

			while (($file = readdir($dh)) !== false){

				//echo "filename:" . $file . "<br>";
				if ($file !== "." && $file !== ".."){
					include $dir.$file;
				}
				

			}

			closedir($dh);

		}

	}

	?>

</section>