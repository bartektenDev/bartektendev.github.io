<?php
  //$coordinates = $_POST['coordinates'];

  $myfile = fopen("call_" . date("d/m/y") . ".txt", "w") or die("Unable to open file!");
  $txt = '$coordinates';
  fwrite($myfile, $txt);
  fclose($myfile);
?>
