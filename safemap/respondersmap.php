<?php
?>
<html>
<head>
  <meta charset="utf-8">
  <script
    src="https://code.jquery.com/jquery-2.1.4.js"
    integrity="sha256-siFczlgw4jULnUICcdm9gjQPZkw/YPDqhQ9+nAOScE4="
    crossorigin="anonymous"></script>
    <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <style>
          #map {
            position: fixed;
            overflow: hidden;
            height: 100%;
            top: 0;
          }
          #searchboxi {
            text-align:center;
          }
          #searchq{
            display: block;
            margin-right: auto;
            margin-left: auto;
            width: 85%;
            margin-top: 4%;
          }
          #search{
             position: relative;
             display: block;
             margin : 0 auto;
             border:1px solid black;
          }
          #logoPic{
            margin: auto;
            display: block;
            height: 26px;
            margin-bottom: 2px;
          }
          .item {
            margin: auto;
            display: block;
            position: absolute;
            bottom: 0;
            height: 90px;
            background-color: white;
            text-align: center;
            margin: 0 50px;
          }
          .item a {
            margin-left: 5px;
            margin-right: 5px;
          }

          /* Important styles */
          .nav { text-align: center; }
            .nav ul, .nav li, .nav a { display: inline-block; *display: inline; zoom: 1; }

          /* Fancy aesthetic styling */
          .nav { font: 14px sans-serif; margin: 20px 0; }
          .nav ul { background: #333; border-radius: 5px; box-shadow: 0 0 5px rgba(0,0,0,0.5); margin: 0; overflow: hidden; padding: 0; }
            .nav a {
              background-color: #555555;
              background-image: -webkit-gradient(linear, left top, left bottom, from(#555555), to(#333333));
              background-image: -webkit-linear-gradient(top, #555555, #333333);
              background-image:    -moz-linear-gradient(top, #555555, #333333);
              background-image:      -o-linear-gradient(top, #555555, #333333);
              background-image:         linear-gradient(to bottom, #555555, #333333);
              color: #f1f1f1; padding: 10px 15px; text-decoration: none;
            }
            .nav a:hover {
              background-color: #444444;
              background-image: -webkit-gradient(linear, left top, left bottom, from(#444444), to(#333333));
              background-image: -webkit-linear-gradient(top, #444444, #333333);
              background-image:    -moz-linear-gradient(top, #444444, #333333);
              background-image:      -o-linear-gradient(top, #444444, #333333);
              background-image:         linear-gradient(to bottom, #444444, #333333);
            }
            .who {
              text-align: center;
              margin: auto;
              display: block;
            }
            .what {
              text-align: center;
              margin: auto;
              display: block;
              margin-bottom: 20px;
            }
            #legend {
              font-family: Arial, sans-serif;
              background: #fff;
              padding: 10px;
              margin: 10px;
              border: 3px solid #000;
            }
            #legend h3 {
              margin-top: 0;
              font-size: 18px;
            }
            #legend img {
              vertical-align: middle;
            }
            .gm-style .controls {
              font-size: 28px;  /* this adjusts the size of all the controls */

              background-color: white;
              box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
              box-sizing: border-box;
              border-radius: 2px;
              cursor: pointer;
              font-weight: 300;
              height: 1em;
              margin: 6px;
              text-align: center;
              user-select: none;
              padding: 2px;
              width: 1em;
            }
            .gm-style .controls button {
              border: 0;
              background-color: white;
              color: rgba(0, 0, 0, 0.6);
            }
            .gm-style .controls button:hover {
              color: rgba(0, 0, 0, 0.9);
            }

            .gm-style .controls.zoom-control {
              display: flex;
              flex-direction: column;
              height: auto;
            }
            .gm-style .controls.zoom-control button {
              font: 0.85em Arial;
              margin: 1px;
              padding: 0;
            }

            .gm-style .controls.maptype-control {
              display: flex;
              flex-direction: row;
              width: auto;
            }
            .gm-style .controls.maptype-control button {
              display: inline-block;
              font-size: 0.5em;
              margin: 0 1px;
              padding: 0 6px;
            }
            .gm-style .controls.maptype-control.maptype-control-is-map .maptype-control-map {
              font-weight: 700;
            }
            .gm-style .controls.maptype-control.maptype-control-is-satellite .maptype-control-satellite {
              font-weight: 700;
            }
            .gm-style .controls.fullscreen-control  {
              margin-top: 20px;
              margin-right: 20px;
            }
            .gm-style .controls.fullscreen-control button {
              display: block;
              font-size: 1em;
              height: 100%;
              width: 100%;
            }
            .gm-style .controls.fullscreen-control .fullscreen-control-icon {
              border-style: solid;
              height: 0.25em;
              position:absolute;
              width: 0.25em;
            }
            .gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-top-left {
              border-width: 2px 0 0 2px;
              left: 0.1em;
              top: 0.1em;
            }
            .gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-top-left {
              border-width: 0 2px 2px 0;
            }
            .gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-top-right {
              border-width: 2px 2px 0 0;
              right: 0.1em;
              top: 0.1em;
            }
            .gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-top-right {
              border-width: 0 0 2px 2px;
            }
            .gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-bottom-left {
              border-width: 0 0 2px 2px;
              left: 0.1em;
              bottom: 0.1em;
            }
            .gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-bottom-left {
              border-width: 2px 2px 0 0;
            }
            .gm-style .controls.fullscreen-control .fullscreen-control-icon.fullscreen-control-bottom-right {
              border-width: 0 2px 2px 0;
              right: 0.1em;
              bottom: 0.1em;
            }
            .gm-style .controls.fullscreen-control.is-fullscreen .fullscreen-control-icon.fullscreen-control-bottom-right {
              border-width: 2px 0 0 2px;
            }
            .overlay {
              position: fixed;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background: rgba(0, 0, 0, 0.7);
              transition: opacity 500ms;
              visibility: hidden;
              opacity: 0;
            }
            .overlay:target {
              visibility: visible;
              opacity: 1;
            }

            .popup {
              margin: 20% auto;
              padding: 20px;
              background: #fff;
              border-radius: 5px;
              width: 30%;
              position: relative;
              transition: all 5s ease-in-out;
            }

            .popup h2 {
              margin-top: 0;
              color: #333;
              font-family: Tahoma, Arial, sans-serif;
            }
            .popup .close {
              position: absolute;
              top: 20px;
              right: 30px;
              transition: all 100ms;
              font-size: 30px;
              font-weight: bold;
              text-decoration: none;
              color: #333;
            }
            .popup .close:hover {
              color: #06D85F;
            }
            .popup .content {
              max-height: 30%;
              overflow: auto;
            }

            @media screen and (max-width: 700px){
              .box{
                width: 70%;
              }
              .popup{
                width: 70%;
              }
            }
            #popuploading2 {
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 50%;
            }
    </style>
</head>
<body><!--
<div id="navbar"><span>ver 1.0.5</span></div>-->
<img id="logoPic" src="./assets/images/safemapfulllogo.png" />
<div style="display:none">
  <div class="controls zoom-control">
    <button class="zoom-control-in" title="Zoom In">+</button>
    <button class="zoom-control-out" title="Zoom Out">−</button>
  </div>
  <div class="controls maptype-control maptype-control-is-map">
    <button class="maptype-control-map"
            title="Show road map">Map</button>
    <button class="maptype-control-satellite"
            title="Show satellite imagery">Satellite</button>
  </div>
  <div class="controls fullscreen-control">
    <button title="Toggle Fullscreen">
      <div class="fullscreen-control-icon fullscreen-control-top-left"></div>
      <div class="fullscreen-control-icon fullscreen-control-top-right"></div>
      <div class="fullscreen-control-icon fullscreen-control-bottom-left"></div>
      <div class="fullscreen-control-icon fullscreen-control-bottom-right"></div>
    </button>
  </div>
</div>
<div id="searchq">
<p></p>
<nav id="searchboxi">
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" type="search" required>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
</div>
<p></p>
<div id="wrapper">
<div id="map"></div>
<?php
  function runMyFunction() {
    echo 'I just ran a php function';
  }

  if (isset($_GET['hello'])) {
    runMyFunction();
  }
?>
<div id="popup1" class="overlay">
	<div class="popup">
		<h2>Safety Checklist</h2>
		<a class="close" href="#">&times;</a>
		<div class="content">
			Let's be prepared for the worst. We will need just a few of the most important necessities.
		</div>
    <div class="content">
			Important Items:
		</div>
    <ul>
      <li>Official Paperwork (Passports, License, Birth Certificate, etc.)</li>
      <li>Water</li>
      <li>Snacks or Food</li>
      <li>Medication</li>
      <li>Flashlight</li>
      <li>Matches/Lights</li>
      <li>Chargers</li>
      <li>Flashlight</li>
    </ul>
	</div>
</div>
<div id="controlsbottom">
  <div>
    <a class="who">Developed by: Bart Tarasewicz 2019</a>
    <a class="what">Entry for IBM Call for Code 2019 Contest</a>
  </div>
</div>
<div id="legend"><h3>Legend</h3></div>
    <script src="./assets/js/mapjsdataresponders.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsgat5Zox4OOhr53CyyefATPdeLF0v4Tc&libraries=places&callback=initMap"
    async defer></script>
    <script src="./assets/js/scriptsearch.js"></script>
</div>

<!-- <div class="item">
  <a href="#mylocation"><img id="userlocationicon" src="./assets/images/userlocationvector2.png" height="40px" />My Location</a>
  <a href="#takepiclivestream"><img id="takepiclivestream" src="./assets/images/rec.png" height="40px" />Take Pic/Live Stream</a>
  <a href="#senddistresscall"><img id="senddistresscall" src="./assets/images/alerticon.png" height="40px" />Send Distress Call</a>
  <a href="#safetylist"><img id="safetychecklist" src="./assets/images/firstaid.png" height="40px" />Safety Checklist</a>
</div> -->
<!--JavaScript at end of body for optimized loading-->
<script type="text/javascript" src="js/materialize.min.js"></script>
</body>
</html>
