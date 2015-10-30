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

    });

  });

});
