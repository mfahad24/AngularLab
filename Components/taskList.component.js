(function() {
  var taskList = {
    templateUrl: 'Templates/taskList.html'
  };

  angular.module("app")
    .component("taskList", taskList);
})();
