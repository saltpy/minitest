/*global desc, task, jake, fail, complete, directory */

(function() {
  "use strict";

  desc("Build and Test");
  task("default", ["lint"]);

  desc("Lint");
  task("lint", function() {
    var lint = require("./node_modules/easylint/src/lint_runner");

    var srcFiles = new jake.FileList();
    srcFiles.include("**/*.js");
    srcFiles.exclude("node_modules");
    srcFiles.exclude("*.conf.js");

    var options = nodeLintOptions();

    var passed = lint.validateFileList(srcFiles.toArray(), options, {});
    if (! passed) fail("Linting failed.");
  });

  function nodeLintOptions() {
    return {
      bitwise:true,
      curly:false,
      eqeqeq:true,
      forin:true,
      immed:true,
      latedef:true,
      newcap:true,
      noarg:true,
      noempty:true,
      nonew:true,
      regexp:true,
      undef:true,
      strict:true,
      trailing:true,
      node:true
    };
  }
}());
