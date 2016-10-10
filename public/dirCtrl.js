angular.module("storeApp")
.controller("dirCtrl",function($scope, mainServ){

      $scope.list = [{
        name: "Battleship",
        price: "$249,000,000.63",
        url: "./images/battleship01.jpg"
      },{
        name: "Canoe",
        price: "$199.08",
        url: "./images/canoe.jpeg"
      },{
        name: "Sailboat",
        price: "$5,999.72",
        url: "./images/sailboat.jpeg"
      },{
        name: "Basket",
        price: "$49.35",
        url: "./images/basket.jpg"
      },{
        name: "Guitar",
        price: "$24,799.80",
        url: "./images/guitar.jpg"
      }];
      $scope.addToCart = function(item){
        mainServ.list.push(item);
      };
});
