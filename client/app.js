angular.module("heroku", ["ngRoute", "heroku.controllers"]).config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
        controller: "HomeController"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
]);
