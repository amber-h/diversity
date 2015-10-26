var getJson = function (url, success, error) {
  var request = new XMLHttpRequest();

  request.open("GET", url);

  request.send();

  request.onreadystatechange = function () {
    var DONE = 4;
    var OK = 200;
    if (request.readyState === DONE) {
      request.status === OK ?
        success(JSON.parse(request.responseText)) :
        error(request);
    }
  };
};

var renderTable = function (rows) {
  var tableElement = document.getElementById("table");

  if (typeof rows === "object") {
    Object.keys(rows).map(function (key) {
      var rowElement = document.createElement("tr");

      var headerElement = document.createElement("th");
      headerElement.textContent = key;
      rowElement.appendChild(headerElement);

      var dataElement = document.createElement("td");
      dataElement.textContent = rows[key];
      rowElement.appendChild(dataElement);

      return rowElement;
    }).forEach(function (rowElement) {
      tableElement.appendChild(rowElement);
    });
  }
};

getJson(
  "http://192.168.99.100:4567/people",
  function (people) {
    var answer = people.reduce(function (answer, person) {
      if (!answer.hasOwnProperty(person.gender)) {
        answer[person.gender] = 0;
      }
      answer[person.gender] += 1;
      return answer;
    }, {});
    renderTable(answer);
  },
  function (response) {
    console.error(response);
  }
);
