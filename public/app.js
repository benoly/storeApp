angular.module("storeApp", ["ui.router"])

.config(function($urlRouterProvider, $stateProvider){

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "/templates/home.html"
    })
    .state("items", {
      url: "/items",
      templateUrl: "/templates/items.html"
    })
    .state("cart", {
      url: "/cart",
      templateUrl: "/templates/cart.html",
      controller: "mainCtrl"
    });

  $urlRouterProvider.otherwise("/");

});
