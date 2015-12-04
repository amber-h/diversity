require(["lib/phrasal_template/index", "lib/query_builder/index", "lib/query_service/index", "lib/results_table/index"],
                function (PhrasalTemplate, QueryBuilder, QueryService, ResultsTable) {
  var defaultGroup = {name : "group", value : "gender" };
  var defaultRole = {name : "role", value : "PS" };
  var defaultLocation = {name : "location", value : "The World" };

  var defaultOptions = [defaultGroup, defaultRole, defaultLocation];
  defaultOptions.forEach(function(option) {
    QueryBuilder(option);
  });

  $("#query").append(PhrasalTemplate([
    {type: "collocation", value: "By "},
    {type: "slot", value: {name: "group", options: ["gender"], onchange: function (value) {
      var queryOptions = QueryBuilder(value);
      console.log(queryOptions);
      QueryService(queryOptions);
    }}},
    {type: "collocation", value: ", how many "},
    {type: "slot", value: {name: "role", options: ["PS", "Dev", "BA", "QA", "PM"], onchange: function (value) {
      var queryOptions = QueryBuilder(value);
      console.log(queryOptions);
      QueryService(queryOptions);
    }}},
    {type: "collocation", value: " ThoughtWorkers are there in "},
    {type: "slot", value: {name: "location", options: ["The World", "North America"], onchange: function (value) {
      var queryOptions = QueryBuilder(value);
      console.log(queryOptions);
      QueryService(queryOptions);
    }}},
    {type: "collocation", value: "?"},
  ]));

  QueryService(QueryBuilder(defaultGroup))

});
