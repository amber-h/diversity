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
        labels: true,
        type: 'bar',
        colors: {
          Female: 'rgb(38,189,207)',
          Male: 'rgb(17,170,88)'
        }
      },
      bar: {
        width: {
          ratio: 0.5
        }
      },
      axis: {
        y: {
          label: {
            text: 'Number of ThoughtWorkers',
            position: 'outer-middle'
          }
        }
      },
      oninit: function() {
        this.main.append('rect')
          .style('fill', 'white')
          .attr('x', 0.5)
          .attr('y', -0.5)
          .attr('width', this.width)
          .attr('height', this.height)
          .transition().duration(1000)
          .attr('y', -this.height)
          .attr('height', this.height)
          .remove();
      }
    });
  }
});
