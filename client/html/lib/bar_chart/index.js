define([], function() {

  return function(data) {
    json_data = JSON.parse(data);

    var chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['Female', json_data.female.count],
          ['Male', json_data.male.count]
        ],
        type: 'bar',
        colors: {
          Female: '#6ed3cf',
          Male: '#9068be'
        }
      },
      bar: {
        width: {
          ratio: 0.5
        }
      }
    });
  }
});
