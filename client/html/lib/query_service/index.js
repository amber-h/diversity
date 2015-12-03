define([], function() {
  return function(queryOptions) {

    var sendRequest = function(request) {
      $.post("http://192.168.99.100:4567/stats", JSON.stringify(request),
        function(data, status) {
          alert('success:' + data)
        });
    };
    sendRequest(queryOptions);

    var results = {};
    return results;
  };

});
