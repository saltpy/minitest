"use strict";

var assert = require("./assert");

exports.assertSameType = function(a, b) {
  exports.assert(Object.prototype.toString.call(a) === Object.prototype.toString.call(b));
};

exports.assertArrayEqual = function(a, b) {
  exports.assertSameType(a, b);
  exports.assert(a.length === b.length);
  for (var i = 0; i < a.length; i++) {
    exports.assert(a[i] === b[i]);
  }
};

exports.assertStructEqual = function(a, b) {
  exports.assertArrayEqual(Object.keys(a).sort(), Object.keys(b).sort());
};

exports.assert = assert;
