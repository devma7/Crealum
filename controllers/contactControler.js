
app.controller("contactControler",function($scope,$http,sendEmail){
// $scope.product =  $scope.selectOptions[0];
$scope.villeinput = "Casablanca";
$scope.ville= "0";
$scope.changeCity = function(){
  if($scope.ville == "0"){
    $scope.showCity = false;
    $scope.villeinput = "Casablanca";
  }
  else{
    $scope.showCity = true;
    $scope.villeinput = "";

  }
}
// send email service
sendEmail.send($scope,$http);

});
