"use strict";

var gulp = require("gulp"),
  mocha = require("gulp-mocha");

// Copy all static images
gulp.task("mocha", function () {
  return gulp.src("./test/*.js").pipe(
    mocha({
      globals: ["chai"],
      timeout: 6000,
      ignoreLeaks: false,
      ui: "bdd",
      reporter: "spec",
    })
  );
});

gulp.task("test", gulp.series("mocha"));
