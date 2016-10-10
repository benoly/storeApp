angular.module("storeApp")
.controller("mainCtrl", function($scope, mainServ){
  $scope.list = mainServ.list;
});
