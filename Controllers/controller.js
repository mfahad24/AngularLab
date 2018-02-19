(function() {
  function FormController(ToDoService) {
    var vm = this; //this refers to the controller
    vm.removeItem = function(index) {
      vm.toDoList.splice(index, 1)
    };
    vm.toDoList = ToDoService.getData();
    vm.incomingInputs = function(item) {
      vm.toDoList.push(item)
      vm.toDo = "";
    };
  }
  angular
    .module("app")
    .controller("FormController", FormController);
})();


//leaves the X and number
//Value doesnt clear
//x does not position right DONE
