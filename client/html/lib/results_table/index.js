define([], function() {
  return function(data) {
    $table_body = $('<tbody>');

    $data_row = $('<tr>');
    $data_row.append('<td>' + "Male" + '</td>');
    $data_row.append('<td>' + data.male.count + '</td>');
    $data_row.append('<td>' + data.male.percentage + '</td>');
    $table_body.append($data_row);

    $data_row = $('<tr>');
    $data_row.append('<td>' + "Female" + '</td>');
    $data_row.append('<td>' + data.female.count + '</td>');
    $data_row.append('<td>' + data.female.percentage + '</td>');
    $table_body.append($data_row);

    return $table_body
  }
});
