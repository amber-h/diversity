define(["./index"], function (QueryService) {

  describe("a Query Service", function () {

    describe("Query Builder", function () {
      it("is defined", function () {
        expect(QueryService).toBeDefined();
      });

      it("is a function", function () {
        expect(typeof QueryService).toBe("function");
      });

      it("returns a query options map", function() {
          var newQueryOption = {};

          var queryOptions = QueryService(newQueryOption);

          expect(queryOptions).toBeDefined();
      });

      it("returns a query options map with default values", function() {
        var defaultLocation = {  name: "location", value: "Chicago" };
        var defaultRole = { name: "role", value: "PM" };

        var queryBuilderFunction = QueryService();
        queryBuilderFunction(defaultLocation);
        queryBuilderFunction(defaultRole);

        var newQueryOption = {};
        var queryOptions = queryBuilderFunction(newQueryOption);

        expect(queryOptions.location).toEqual("Chicago");
        expect(queryOptions.role).toEqual("PM");
      });

      it("returns a query options map with an updated value", function() {
        var defaultLocation = {  name: "location", value: "Chicago" };
        var defaultRole = { name: "role", value: "PM" };

        var queryBuilderFunction = QueryService();
        queryBuilderFunction(defaultLocation);
        queryBuilderFunction(defaultRole);

        var newQueryOption =  {name: "location", value: "Brazil"};
        var queryOptions = queryBuilderFunction(newQueryOption);

        expect(queryOptions.location).toEqual("Brazil");
        expect(queryOptions.role).toEqual("PM");
      });

    });

  });

});
