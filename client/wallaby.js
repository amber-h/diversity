module.exports = function () {
  return {
    files: [
      {pattern: "lib/bind.js", instrument: false},
      {pattern: "lib/jquery.js", instrument: false},
      {pattern: "lib/jasmine-jquery.js", instrument: false},
      {pattern: "lib/require.js", instrument: false},
      {pattern: "lib/*.js", instrument: false, load: false},
      {pattern: "lib/**/index.js", load: false},
      {pattern: "bootstrap.js", instrument: false}
    ],
    tests: [
      {pattern: "lib/**/spec.js", load: false}
    ]
  };
};
