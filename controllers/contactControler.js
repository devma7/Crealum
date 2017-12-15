
app.controller("contactControler",function($scope,$http,sendEmail){
// $scope.product =  $scope.selectOptions[0];
$scope.ville= "0";
$scope.changeCity = function(){
  if($scope.ville == "0"){
    $scope.showCity = false;
  }
  else{
    $scope.showCity = true;
  }
}
// send email service
sendEmail.send($scope,$http);

});
