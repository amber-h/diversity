define([], function () {
  return function (phrase) {
    var element = $("<div class='phrasal-template'>");

    if (typeof phrase === "string") {
      element.text(phrase);
    }

    if (Array.isArray(phrase)) {
      phrase.forEach(function (phraseComponent) {
        var phraseComponentElement;

        switch (phraseComponent.type) {
          case "collocation":
            phraseComponentElement = $("<span class='collocation'>").text(phraseComponent.value);
          break;
          case "slot":
            phraseComponentElement = $("<select>").addClass("slot");
            phraseComponentElement.attr("data-name", phraseComponent.value.name);

            phraseComponent.value.options.forEach(function (option) {
              var optionElement = $("<option value='"+option+"' label='"+option+"'>");

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
