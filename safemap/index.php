<?php
?>
<html>
<head>
  <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <link type="text/css" rel="stylesheet" href="./assets/css/mainpage.css"  media="screen,projection"/>
</head>
<body>
  <div id="centerstuff">
    <div class="row">
        <img id="logo" src="./assets/images/safemapfulllogowhitetext.png" height="10%"/><p></p>
        <img id="earth" src="./assets/images/spinningearth.gif" /><p></p>
        <a id="choose">Choose a map to view</a><p></p>
        <a class="waves-effect waves-light btn" href="usermap.php">Users Map</a>
        <a class="waves-effect waves-light btn" href="respondersmap.php">Responders Map</a><p></p>
    </div>
  </div>

  <div class="clipbottom">
    <p></p>
    <a class="who">Developed by: Bart Tarasewicz 2019</a><p></p>
    <a class="what">Entry for IBM Call for Code 2019 Contest</a>
    <p></p>
  </div>

  <video autoplay muted loop id="myVideo">
    <source src="./assets/videos/bgvideo.mp4" type="video/mp4">
  </video>
</body>
</html>
