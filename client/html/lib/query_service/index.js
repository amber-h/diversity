define([], function () {

  var queryBuilder = function () {
    var options = {};
    return function(newOption) {
      options[newOption.name] = newOption.value;
    return options;
  }};

  return queryBuilder;
});
