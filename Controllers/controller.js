(function() {
  function FormController() {
    var vm = this; //this refers to the controller
    vm.removeItem = function(index) {
      vm.toDoList.splice(index, 1)
    };
    vm.toDoList = [];
    vm.check = function(item) {
      console.log(vm.toDoList);
      vm.toDoList.push(item)
      vm.toDo = ""; 
      // document.getElementById("addinput").value("");
    };
  }
  angular
    .module("app")
    .controller("FormController", FormController);
})();


//leaves the X and number
//Value doesnt clear
//x does not position right DONE
