define(["./index"], function (PhrasalTemplate) {

  describe("Phrasal template", function () {

    it("is defined", function () {
      expect(PhrasalTemplate).toBeDefined();
    });

    it("is a function", function () {
      expect(typeof PhrasalTemplate).toBe("function");
    });
    
  });

});
