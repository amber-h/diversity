define([], function () {
  var options = {};

  return function(newOption) {
    options[newOption.name] = newOption.value;
    return options;
  };

});
