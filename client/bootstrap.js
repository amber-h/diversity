wallaby.delayStart()

requirejs.config({
    shim: {
      "lib/jquery": {
        exports: "jQuery"
      }
    },
    deps: wallaby.tests,
    callback: wallaby.start
});
