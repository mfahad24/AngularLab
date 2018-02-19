(function (){

  function ToDoService () {

    var toDoInputs = {};
    console.log(toDoInputs); 
    return {
      getData: getData,
      setData: setData,

    }
    function setData (input) {
      toDoInputs = input;

    }
    function getData (){
      return toDoInputs;
    }
  }
  angular
  .module("app")
  .factory("ToDoService", ToDoService)
})();
