(function() {
  function FormController() {
    var vm = this; //this refers to the controller
    vm.removeItem = function(index) {
      vm.toDoList.splice(index, 1)
    };
    vm.toDoList = [];
    vm.check = function(item) {
      vm.toDoList.push({item})
      
    };
  }
  angular
    .module("app")
    .controller("FormController", FormController);
})();
