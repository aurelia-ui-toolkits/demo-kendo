/* */ 
(function() {
  'use strict';
  require('source-map-support').install();
  require('chai').should();
  var fs = require('fs');
  function getTestSuite(dir) {
    return fs.readdirSync(dir).filter(filter()).map(map(dir));
  }
  function filter() {
    return function(file) {
      var ext = file.slice(-3);
      return (ext === '.md');
    };
  }
  function map(dir) {
    return function(file) {
      var name = file.replace('.md', ''),
          htmlPath = dir + name + '.html',
          html = fs.readFileSync(htmlPath, 'utf8'),
          mdPath = dir + name + '.md',
          md = fs.readFileSync(mdPath, 'utf8');
      return {
        name: name,
        input: md,
        expected: html
      };
    };
  }
  function assertion(testCase, converter) {
    return function() {
      testCase.actual = converter.makeHtml(testCase.input);
      testCase = normalize(testCase);
      testCase.actual.should.equal(testCase.expected);
    };
  }
  function normalize(testCase) {
    testCase.expected = testCase.expected.replace(/(\r\n)|\n|\r/g, '\n');
    testCase.actual = testCase.actual.replace(/(\r\n)|\n|\r/g, '\n');
    testCase.expected = testCase.expected.split('\n').map(function(x) {
      return x.trim();
    }).join('\n');
    testCase.actual = testCase.actual.split('\n').map(function(x) {
      return x.trim();
    }).join('\n');
    testCase.expected = testCase.expected.trim();
    testCase.actual = testCase.actual.trim();
    testCase.expected = testCase.expected.replace(/(\r\n)|\n|\r/g, '\n');
    testCase.actual = testCase.actual.replace(/(\r\n)|\n|\r/g, '\n');
    return testCase;
  }
  module.exports = {
    getTestSuite: getTestSuite,
    assertion: assertion,
    normalize: normalize,
    showdown: require('../.build/showdown')
  };
})();
