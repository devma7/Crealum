

app.controller("productControler",function($scope,$rootScope,$http,$routeParams){
  $scope.product_type=$routeParams.produit_type;
  var all_Images = $rootScope.Allimages;
  //console.log( all_Images['fenetres']);
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
});
