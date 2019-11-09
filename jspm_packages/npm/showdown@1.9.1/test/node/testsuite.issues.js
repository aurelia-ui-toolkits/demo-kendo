/* */ 
var bootstrap = require('../bootstrap'),
    converter = new bootstrap.showdown.Converter(),
    assertion = bootstrap.assertion,
    testsuite = bootstrap.getTestSuite('test/issues/');
describe('makeHtml() issues testsuite', function() {
  'use strict';
  for (var i = 0; i < testsuite.length; ++i) {
    it(testsuite[i].name.replace(/-/g, ' '), assertion(testsuite[i], converter));
  }
});
