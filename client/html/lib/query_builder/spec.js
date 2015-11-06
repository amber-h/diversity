define(["./index"], function (QueryBuilder) {

  describe("a Query Service", function () {

    describe("Query Builder", function () {
      it("is defined", function () {
        expect(QueryBuilder).toBeDefined();
      });

      it("is a function", function () {
        expect(typeof QueryBuilder).toBe("function");
      });

      it("returns query options", function() {
          var newQueryOption = {};

          var queryOptions = QueryBuilder(newQueryOption);

          expect(queryOptions).toBeDefined();
      });

      it("returns query options with default values", function() {
        var defaultLocation = {  name: "location", value: "Chicago" };
        var defaultRole = { name: "role", value: "PM" };

        QueryBuilder(defaultLocation);
        QueryBuilder(defaultRole);

        var newQueryOption = {};
        var queryOptions = QueryBuilder(newQueryOption);

        expect(queryOptions.location).toEqual("Chicago");
        expect(queryOptions.role).toEqual("PM");
      });

      it("returns query options with an updated value", function() {
        var defaultLocation = {  name: "location", value: "Chicago" };
        var defaultRole = { name: "role", value: "PM" };

        QueryBuilder(defaultLocation);
        QueryBuilder(defaultRole);

        var newQueryOption =  {name: "location", value: "Brazil"};
        var queryOptions = QueryBuilder(newQueryOption);

        expect(queryOptions.location).toEqual("Brazil");
        expect(queryOptions.role).toEqual("PM");
      });

    });

  });

});
