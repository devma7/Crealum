
app.service("sendEmail",function(){
  this.send = function($scope,$http){
    $scope.sendMail = function(isValide){
   if(isValide){
    // alert("Valid Form");
   var data = {
     'nom' : $scope.nom,
     'prenom' : $scope.prenom,
     'telephone' :  $scope.telephone,
     'email' : $scope.email,
     'ville' : $scope.villeinput,
     'message' : $scope.message
   }
   var getReq = {
     method : "POST",
     url : "sendMail.inc.php",
     data : data
   }
   var onSuccess = function(success){
     console.log(success.data);
    if(success.data == 'true'){
       console.log('Email send with success');
       $scope.emailSend = true;
       resetData();
     }else {
       console.log('Error: email not send');
       $scope.emailSend = false;
     }
   }
   var onError = function(error){
   //  $scope.emailSend = false;
   console.log("Error");
   }
    $http(getReq).then(onSuccess,onError);
    }
  }
    function resetData(){
       $scope.nom = null;
       $scope.prenom = null;
       $scope.telephone = null;
       $scope.email = null;
      //$scope.villeinput = null;
      $scope.message = null;
      $scope.emailForm.$setUntouched();
    $scope.emailForm.$setPristine();
    }
  }
});
