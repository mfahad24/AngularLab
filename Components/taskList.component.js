(function() {
var taskList = {
    // document.getElementById("addinput").value("");
    templateUrl: 'Templates/taskList.html',
    controller: "FormController"
    }
  angular
    .module("app")
    .component("taskList", taskList);
})();
