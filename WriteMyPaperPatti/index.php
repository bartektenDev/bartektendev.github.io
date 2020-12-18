<?php

$outputFileData = "";

// // Define your username and password
$username = "test";
$password = "1234";
//
if ($username != $username) {
//if (false) {g

?>

  <html>
  
  <body>
  <a>Sorry you can't enter right now.</a>
  </body>
  
  </html>
  
  <?php
}else{
?>

<html>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<meta http-equiv='X-UA-Compatible' content='ie=edge'>
<link rel='stylesheet' type='text/css' href='css/paper.css' />
<link rel='stylesheet' type='text/css' href='css/custom_main.css' />

<script src='js/custom_java.js'></script>
  
  <body>
	<div class='paper container'>
		<h1>WriteMyPaperPatti.py</h1>
		<p>Programmed and Designed by Bart Tarasewicz</p>
		<br></br>
		<p>Enter your topic question: </p><input id='searchTopic'></input>
		<br></br>
		<button id='startWritingPaper' onclick='writePaper();'>Write My Paper!</button>
		<br></br>
		<textarea id='w3review' name='w3review' style='width: 100%; max-width: 100%;height: 30%; max-height: 100%;'>Your paper will be presented here once completed.</textarea>
	</div>
  </body>
  
</html>

<?php

}

?>