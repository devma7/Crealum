<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST)){
//   $_POST = json_decode(file_get_contents('php://input'), true);
   $data = file_get_contents('php://input');
  // $data = json_decode($data);

$to = "mohamedaitlarayek@gmail.com";
$subject = "Crealum";

$message = '
<html>
<head>
<title>Demande d\'un devis</title>
<style>

body{
  width: 50%;
  margin: auto;
  padding: 10px;
}
h1{
  font-size: 22px;
  padding: 10px;
  color:#AAA;
}

.message h3{
  padding: 10px;
  font-weight: normal;
}
.message p{
  padding: 10px 0;
  text-align: justify;
  font-weight: bold;
}
h3 > strong{
margin: 0px 10px;
text-decoration: underline;
}
.item{
  padding:  0 5px;
  margin: 5px 0;

}
.item h4{
  padding: 0;
  font-weight: normal;
}
..item h4> strong{
  font-weight: bold;
}
</style>
</head>
<body>
<h1>Demande d\'un devis:</h1>

<div class="item">
  <h4>Nom : <strong>'.$data->nom .'</strong></h4>
</div>
<div class="item">
  <h4>Prénom : <strong>'.$data->prenom .'</strong></h4>
</div>
<div class="item">
  <h4>Email : <strong>'.$data->email .'</strong></h4>
</div>
<div class="item">
  <h4>Téléphone : <strong>'.$data->telephone .'</strong></h4>
</div>

<div class="message">
  <h3>Besoin de : <strong>'.$data->product.'</strong></h3>
  <p>'.$data->message.'</p>
</div>
</body>
</html>


';

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <contact@crealum.ma>' . "\r\n";
//$headers .= 'Cc: myboss@example.com' . "\r\n";
//send email
echo "Hello world";
/*if(mail($to,$subject,$message,$headers)){
  echo 'true';
}
else{
  echo 'false';
}*/
 }

 ?>
