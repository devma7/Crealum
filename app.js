
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
})
.when("/produits",{
  templateUrl:"views/allProducts.html"
})
// arabic
.when("/ar",{templateUrl:"views/ar/main.html"})
.when("/produit/:produit_type/ar",{
    templateUrl:"views/ar/product.html",
  })
.when("/contact/ar",{
  templateUrl:"views/ar/contact.html",
})
.when("/services/ar",{
  templateUrl:"views/ar/services.html"
})
.when("/produits/ar",{
  templateUrl:"views/ar/allProducts.html"
});
});

app.run(function($rootScope,$http,$window,$routeParams,$location,cfpLoadingBar) {
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


  $rootScope.$on("$routeChangeStart", function(event, next, current) {
       cfpLoadingBar.start();
   });

  $rootScope.$on('$routeChangeSuccess', function () {
  cfpLoadingBar.complete();
     setTimeout(function () {
      cfpLoadingBar.complete();
           }, 2000);


        // get url
        var url = $location.path();
        if(url.indexOf("/ar")> -1){
            $rootScope.url= $location.path().slice(0,$location.path().length-3);
            $rootScope.url_ar = url;

        }else {
          if(url == "/"){
            $rootScope.url = url;
            $rootScope.url_ar = "/ar";
          }else {
            $rootScope.url = url;
            $rootScope.url_ar = url+"/ar";
          }

        }
        if(url.indexOf("/ar") > -1){
            $rootScope.isFranch = false;
            $rootScope.language = "/ar";
        }else {
            $rootScope.isFranch = true;
            $rootScope.language = ""
        }

         });

});
