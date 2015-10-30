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

      it("can render a simple phrase", function () {
        var phrase = "A simple phrase";
        expect(PhrasalTemplate(phrase)).toHaveText(phrase)
      });

      it("can render a phrase with slots", function () {
        var phrase = [
          {type: "collocation", value: "A "},
          {type: "slot", value: {name: "type", options: ["simple", "complex"]}},
          {type: "collocation", value: " phrase"}
        ];

        var phrasalTemplateElement = PhrasalTemplate(phrase);

        var firstCollocationElement = phrasalTemplateElement.querySelector(".collocation:first-of-type");
        var slotElement = phrasalTemplateElement.querySelector(".slot[data-name=type]");
        var lastCollocationElement = phrasalTemplateElement.querySelector(".collocation:last-of-type");

        expect(firstCollocationElement).toHaveText("A ");
        expect(slotElement).toContainElement("option:first-of-type[value=simple][label=simple]");
        expect(slotElement).toContainElement("option:last-of-type[value=complex][label=complex]");
        expect(lastCollocationElement).toHaveText(" phrase");
      });

    });

  });

});
