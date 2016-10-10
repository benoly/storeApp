angular.module("storeApp")
.directive("productCard", function(){
  return {
      templateUrl:"/templates/product.html",
      controller: "dirCtrl",
      restrict: "AE"
    };

});
