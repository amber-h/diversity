define([], function () {
  return function (phrase) {
    var element = document.createElement("div");

    element.classList.add("phrasal-template");

    if (typeof phrase === "string") {
      element.innerText = phrase;
    }

    if (Array.isArray(phrase)) {
      phrase.forEach(function (phraseComponent) {
        var phraseComponentElement;

        switch (phraseComponent.type) {
          case "collocation":
            phraseComponentElement = document.createElement("span");
            phraseComponentElement.classList.add("collocation");
            phraseComponentElement.innerText = phraseComponent.value;
          break;
          case "slot":
            phraseComponentElement = document.createElement("select");
            phraseComponentElement.classList.add("slot");
            phraseComponentElement.setAttribute("data-name", phraseComponent.value.name);
            phraseComponent.value.options.forEach(function (option) {
              var optionElement = document.createElement("option");
              optionElement.value = option;
              phraseComponentElement.appendChild(optionElement);
            });
          break;
          default:
          break;
        }

        element.appendChild(phraseComponentElement);
      });
    }

    return element;
  };
});
