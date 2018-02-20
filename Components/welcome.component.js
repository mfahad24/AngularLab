(function() {
  var welcomePage = {
    templateUrl: 'Templates/welcome.html',
    controller: "FormController"
  }
  angular
    .module("app")
    .component("welcomePage", welcomePage);
})();
