define([], function () {
  return function () {
    var element = document.createElement("div");

    element.classList.add("phrasal-template")

    return element;
  };
});
