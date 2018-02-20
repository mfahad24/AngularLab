(function() {
  angular
    .module("app")
    .config(function($routeProvider) {
      $routeProvider
        .when("/goback", {
          template: "<welcome-page></welcome-page>"
        })
        .when("/welcome", {
          template: "<task-form></task-form>"
        })
        .otherwise({
          redirectTo: "/goback"
        });
    })
})();
