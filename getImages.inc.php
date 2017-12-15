
<?php
 /*if(isset($_GET["type"])){
    $category = $_GET["type"];
  }*/
$fenetresNames = getImagesNames("fenetres");
$portesNames = getImagesNames("portes");
$cuisinesNames = getImagesNames("cuisines");
$placrdsNames = getImagesNames("placards");
$verre_trempeNames = getImagesNames("verre_trempe");
$aquariumNames = getImagesNames("aquarium");

$produits =  array(
  'fenetres' => $fenetresNames,
  'portes'=> $portesNames,
  'placards'=>$placrdsNames,
  'cuisines'=>$cuisinesNames,
  'verre_trempe'=>$verre_trempeNames,
  'aquarium'=>$aquariumNames
);

 echo  json_encode($produits);

 function getImagesNames($category){
   $dirname=  "img/".$category  ;
   $images = scandir($dirname,0);
   $images = array_diff($images, array('.', '..'));
   //$imagesJSON = json_encode($images);
   return $images;
 }

  ?>
