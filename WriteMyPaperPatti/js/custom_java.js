

function writePaper()  {
  var data = new FormData();
  data.append("data" , "");
  var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
  xhr.open( 'post', 'writepaperexecute.php', true );
  xhr.send(data);
}