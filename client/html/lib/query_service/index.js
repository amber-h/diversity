define(['../results_table/index', '../bar_chart/index'], function(ResultsTable, BarChart) {
  return function(queryOptions) {

    var sendRequest = function(request) {
      $.post("http://192.168.99.100:4567/stats", JSON.stringify(request),
        function(data, status) {
          $('#results').empty()
          $('#results').append(ResultsTable(JSON.parse(data)));
          BarChart(data);
        });
    };

    sendRequest(queryOptions);
  };

});
