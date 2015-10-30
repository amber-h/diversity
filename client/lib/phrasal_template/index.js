define([], function () {
  return function (phrase) {
    var element = document.createElement("div");

    element.classList.add("phrasal-template");

    element.innerText = phrase;

    return element;
  };
});
