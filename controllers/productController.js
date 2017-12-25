

app.controller("productController",function($scope,$rootScope,$http,$routeParams){

  // products controller
  $rootScope.product_type=$routeParams.produit_type;
  var all_Images = $rootScope.Allimages;
  $scope.images = all_Images[$scope.product_type];

 if($scope.product_type != "fenetres" && $scope.product_type != "verre_trempe" ){
   $scope.productTypeName = $scope.product_type;
 }else{
 switch ($routeParams.produit_type) {
        case "fenetres":
        $scope.productTypeName = "fenêtres";
        break;
        case "verre_trempe":
        $scope.productTypeName = "verre trempé";
        break;
 }
 }
 var  products_items = [
   {
     href : 'fenetres',
     img : 'img/fenetre.jpg',
     title: 'Fenêtres'
   },
   {
     href : 'cuisines',
     img : 'img/cuisine.jpg',
     title: 'Cuisines'
   },
   {
     href : 'portes',
     img : 'img/porte.jpg',
     title: 'Portes'
   },
   {
     href : 'placards',
     img : 'img/placard.jpg',
     title: 'Placards'
   },
   {
     href : 'verre_trempe',
     img : 'img/verre_trempe.jpg',
     title: 'Verre trempé'
   },
   {
     href : 'aquarium',
     img : 'img/aquarium.jpg',
     title: 'Aquarium'
   }
 ]
 $scope.otherProductsList = getOtherProductsList();

 function getOtherProductsList(){
   var items = products_items;
   for(i=0;i<items.length;i++){
     var item = products_items[i];
     if(item.href == $scope.product_type){
        items.splice(items.indexOf(item),1);
       break;
     }
   }
   return items;
 }
});
