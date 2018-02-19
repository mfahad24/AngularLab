(function() {
  function hoverState() {
    return {
      link: function($scope, $element, $attrs) {
        $element.on("mouseover", function() {
          $element.css("background-color", '#eee')

        });
        $element.on("mouseout", function (){
          $element.css("background-color", 'white')

        })
      }

    }
  }
  angular
    .module("app")
    .directive("hoverState", hoverState);
})();
