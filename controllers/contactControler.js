
app.controller("contactControler",function($scope,$http){
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




 $scope.sendMail = function(isValide){
if(isValide){
  alert("Valid Form");
}
var data = {
  'nom' : $scope.nom,
  'prenom' : $scope.prenom,
  'telephone' :  $scope.telephone,
  'email' : $scope.email,
  'product' : $scope.product,
  'message' : $scope.message
}
var getReq = {
  method : "POST",
  url : "sendMail.php",
  data : data
}
var onSuccess = function(success){
  console.log(success.data);
/*  if(success.data == 'true'){
    console.log('Email send with success');
    $scope.emailSend = true;
    resetData();
  }else {
    console.log('Error: email not send'+$scope.telephone);
    $scope.emailSend = false;
  }*/
}
var onError = function(error){
//  $scope.emailSend = false;
console.log("Error");
}
//$http(getReq).then(onSuccess,onError);
 }
 function resetData(){
  delete  $scope.nom
  delete  $scope.prenom
  delete  $scope.telephone
  delete  $scope.email
  delete $scope.product
  delete $scope.message
 }
});
