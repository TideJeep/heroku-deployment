angular.module("heroku.controllers", []).controller("HomeController", [
  "$scope",
  function($scope) {
    $scope.message = "Hello from Angular";
  }
]);
