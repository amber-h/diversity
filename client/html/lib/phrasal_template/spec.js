define(["./index"], function (PhrasalTemplate) {

  describe("A phrasal template", function () {

    it("is defined", function () {
      expect(PhrasalTemplate).toBeDefined();
    });

    it("is a function", function () {
      expect(typeof PhrasalTemplate).toBe("function");
    });

    describe("instance", function () {

      it("is a DOM element", function () {
        expect(PhrasalTemplate()).toExist();
      });

      it("has the phrasal-template class", function () {
        expect(PhrasalTemplate()).toHaveClass("phrasal-template");
      });

      it("can render a phrase with a collocation", function () {
        var collocation = {type: "collocation", value: "This is a collocation"};

        var phrasalTemplateElement = PhrasalTemplate([collocation]);
        var collocationElement = phrasalTemplateElement.querySelector(".collocation");

        expect(collocationElement).toHaveText(collocation.value);
      });

      it("can render a phrase with a slot", function () {
        var slot = {type: "slot", value: {name: "component", options: ["phrase", "slot"]}};

        var phrasalTemplateElement = PhrasalTemplate([slot]);
        var slotElement = phrasalTemplateElement.querySelector(".slot");

        expect(slotElement).toHaveAttr("data-name", "component");

        slot.value.options.forEach(function (option, index) {
          var optionElement = slotElement.querySelector("option:nth-of-type(" + (index + 1) + ")");
          expect(optionElement).toHaveAttr("label", option);
        });
      });

      it("can render a phrase with collocations and slots", function () {
        var phrase = [
          {type: "collocation", value: "A "},
          {type: "slot", value: {name: "type", options: ["simple", "complex"]}},
          {type: "collocation", value: " phrase with "},
          {type: "slot", value: {name: "component", options: ["phrases", "slots"]}}
        ];

        var phrasalTemplateElement = PhrasalTemplate(phrase);

        var firstCollocationElement = phrasalTemplateElement.querySelector(".collocation:first-of-type");
        var firstSlotElement = phrasalTemplateElement.querySelector(".slot:first-of-type[data-name=type]");
        var lastCollocationElement = phrasalTemplateElement.querySelector(".collocation:last-of-type");
        var lastSlotElement = phrasalTemplateElement.querySelector(".slot:last-of-type[data-name=component]");

        expect(firstCollocationElement).toHaveText("A ");
        expect(firstSlotElement).toContainElement("option:first-of-type[value=simple][label=simple]");
        expect(firstSlotElement).toContainElement("option:last-of-type[value=complex][label=complex]");
        expect(lastCollocationElement).toHaveText(" phrase with ");
        expect(lastSlotElement).toContainElement("option:first-of-type[value=phrases][label=phrases]");
        expect(lastSlotElement).toContainElement("option:last-of-type[value=slots][label=slots]");
      });

      it("can respond to a slot action", function (done) {
        var action = [{type: "slot", value: {name: "group", options: ["gender"], onchange: done }}];

        var phrasalTemplateElement = PhrasalTemplate(action);

        var slotElement = phrasalTemplateElement.querySelector(".slot");

        $(slotElement).trigger("change");
      });

    });

  });

});
