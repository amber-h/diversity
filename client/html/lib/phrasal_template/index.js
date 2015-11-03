define([], function () {
  return function (phrase) {
    var element = $("<div>").addClass("phrasal-template");

    if (typeof phrase === "string") {
      element.text(phrase);
    }

    if (Array.isArray(phrase)) {
      phrase.forEach(function (phraseComponent) {
        var phraseComponentElement;

        switch (phraseComponent.type) {
          case "collocation":
            phraseComponentElement = $("<span>").addClass("collocation").text(phraseComponent.value);
          break;
          case "slot":
            phraseComponentElement = $("<select>").addClass("slot");
            phraseComponentElement.attr("data-name", phraseComponent.value.name);
            phraseComponentElement.on("change", function () {
              phraseComponent.value.onchange({name: phraseComponent.value.name, value: phraseComponentElement.val()});
            });

            phraseComponent.value.options.forEach(function (option) {
              var optionElement = $("<option>");
              optionElement.attr("value", option)
              optionElement.attr("label", option)

              phraseComponentElement.append(optionElement);
            });
          break;
          default:
          break;
        }
        element.append(phraseComponentElement);
      });
    }

    return element[0];
  };
});
