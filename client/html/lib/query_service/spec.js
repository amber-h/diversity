define(["./index"], function (QueryService) {

  describe("a Query Service", function () {

    describe("Query Builder", function () {
      it("is defined", function () {
        expect(QueryService).toBeDefined();
      });

      it("is a function", function () {
        expect(typeof QueryService).toBe("function");
      });

      it("returns query results", function() {
          var newQueryOption = {};

          var queryResults = QueryService(newQueryOption);

          expect(queryResults).toBeDefined();
      });

    });

  });

});
