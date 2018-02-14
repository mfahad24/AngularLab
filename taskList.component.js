(function() {
  var taskList = {
    bindings: {
      name: "@" // accept string attributes
    },
    template: `<div class="storeProduct">
            <h3>$1 {{ $ctrl.name }}</h3>
            <button>Buy</button>
        </div>`
  };

  angular.module("app")
    .component("taskList", taskList);
})();
