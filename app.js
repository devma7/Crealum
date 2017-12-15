
var app = angular.module("crealumApp",['ngRoute','angular-loading-bar']);

app.config(function($routeProvider,cfpLoadingBarProvider){
  cfpLoadingBarProvider.includeSpinner = true;
  $routeProvider
.when("/",{templateUrl:"views/main.html"})
.when("/produit/:produit_type",{
    templateUrl:"views/product.html",
  })
.when("/contact",{
  templateUrl:"views/contact.html",
})
.when("/services",{
  templateUrl:"views/services.html"
});
/*   .when("/green",{templateUrl:"green.html"});*/
});

app.run(function($rootScope,$http,$window,$routeParams,cfpLoadingBar) {

  $rootScope.$on("$locationChangeStart", function(event, next, current) {
       cfpLoadingBar.start();
       console.log("location Start");
   });
  $rootScope.$on('$locationChangeSuccess', function () {
  cfpLoadingBar.complete();
     console.log("location change");
     setTimeout(function () {
      cfpLoadingBar.complete();
           }, 2000);

        if (document.readyState == 'complete') {
          console.log("scrollTop");
          $window.scroll(0,0);

        }



         });


  var getReq = {
      method: 'GET',
      url: 'getImages.php'
     }
     var onSuccess = function (success){
       //console.log(success.data);
     $rootScope.Allimages = success.data;
      }
     var onError = function (error){
     $rootScope.Allimages = error.status;
    //console.log(error.status);
       }
    $http(getReq).then(onSuccess,onError);
});
