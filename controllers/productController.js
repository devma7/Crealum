

app.controller("productController",function($scope,$rootScope,$http,$routeParams){

  // products controller
  $rootScope.product_type=$routeParams.produit_type;
  var getReq = {
      method: 'GET',
      url: 'getImages.inc.php'
     }
     var onSuccess = function (success){
       //console.log(success.data);
     $rootScope.Allimages = success.data;
      }
     var onError = function (error){
     $rootScope.Allimages = undefined;
    //console.log(error.status);
       }
    $http(getReq).then(onSuccess,onError);
    
  var all_Images = $rootScope.Allimages;
  $scope.images = all_Images[$scope.product_type];

 if($scope.product_type != "fenetres" && $scope.product_type != "verre_trempe" ){
   $scope.productTypeName = $scope.product_type;
   switch ($routeParams.produit_type) {
          case "portes":
          $scope.productTypeNameAr = "أبواب";
          break;
          case "cuisines":
          $scope.productTypeNameAr = "مطابخ";
          break;
          case "placards":
          $scope.productTypeNameAr = "خرانة الملابس";
          break;
          case "aquarium":
          $scope.productTypeNameAr = "أحواض السمك";
          break;
   }
 }else{
 switch ($routeParams.produit_type) {
        case "fenetres":
        $scope.productTypeName = "fenêtres";
        $scope.productTypeNameAr = "نوافد";
        break;
        case "verre_trempe":
        $scope.productTypeName = "verre trempé";
        $scope.productTypeNameAr = "زجاج";
        break;
 }
 }
 var  products_items = [
   {
     href : 'fenetres',
     img : 'img/fenetre.jpg',
     title: 'Fenêtres',
     titleAr:'نوافذ'
   },
   {
     href : 'cuisines',
     img : 'img/cuisine.jpg',
     title: 'Cuisines',
     titleAr:'مطابخ'
   },
   {
     href : 'portes',
     img : 'img/porte.jpg',
     title: 'Portes',
     titleAr: 'أبواب'
   },
   {
     href : 'placards',
     img : 'img/placard.jpg',
     title: 'Placards',
     titleAr:'خزانة الملابس'
   },
   {
     href : 'verre_trempe',
     img : 'img/verre_trempe.jpg',
     title: 'Verre trempé',
     titleAr:'زجاج'
   },
   {
     href : 'aquarium',
     img : 'img/aquarium.jpg',
     title: 'Aquarium',
     titleAr:'أحواض السمك'
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
