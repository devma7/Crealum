
app.controller("mainController",function($scope,$rootScope,$location){
  $scope.getInclude = function(){
      if($scope.isFranch){
          return "'views/includes/navbar.html'";
      }else {
        return "'views/includes/ar/navbar.html'";
      }
  }

$scope.setArabic = function(){
  $scope.isFranch = "false";
}
$scope.setFranch = function(){
  $scope.isFranch = "true";
}


});
