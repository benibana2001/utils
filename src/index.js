(function (window) {
  function Utils() {
    var _utils = {};
    /**
     * log type of variable
     * @param {any} variable
     */
    _utils.log = function (variable) {
      console.log(variable);
      console.log("typeof variable: " + typeof variable);
      console.log("String(variable): " + String(variable));
      console.log("Number(variable): " + Number(variable));
    };

    return _utils;
  }

  if (typeof window.utils === "undefined") {
    window.Utils = Utils();
  }
})(window);
