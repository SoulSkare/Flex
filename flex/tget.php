<?php
   $magnet = $_POST['magnet'];
   $mediaType = $_POST['mediaType'];

   if ($mediaType == "tv"){
       echo('tget.php says Tv Show: ' . $magnet);
       file_put_contents('tv.txt', $magnet);
   }
   
    if ($mediaType == "movie"){
       echo('tget.php says Movie: ' . $magnet);
       file_put_contents('movie.txt', $magnet);
   }
?>