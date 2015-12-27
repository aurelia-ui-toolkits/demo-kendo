// all sample files should not be minified or bundled because it messes up
// how they are shown in the browser, and thus how they are shown in the demo
// but we still want to bundle files that are not "sample" files
var nonSampleBundle = [
  "shared/*.js",
  "*.js",
  "**/*.json!json", // bundle all json files (such as kendo's local data samples, registry.json)
  "*.html!text",
  "shared/*.html!text",
  "installation-wizard/*.js",
  "installation-wizard/*.html!text",
  "about/*.js",
  "about/*.html!text",
  "theme-selector/*.js",
  "theme-selector/*.html!text",
  "help/*.js",
  "help/*.html!text"
];

var aureliaBundle = [
  "aurelia-framework",
  "aurelia-bootstrapper",
  "aurelia-router",
  "aurelia-templating-binding",
  "aurelia-templating-resources",
  "aurelia-templating-router",
  "aurelia-loader-default",
  "aurelia-history-browser",
  "aurelia-logging-console"
];

var pluginsBundle = [
  "aurelia-kendoui-plugin",
  "aurelia-kendoui-plugin/**/*",
  "aurelia-kendoui-plugin/**/*.html!text",
  "showdown",
  "prism",
  "jquery",
  "css",
  "text",
  "core-js",
  "babel",
  "bootstrap",
  "bootstrap/css/bootstrap.css!text"
];

// concatenate all bundle definitions
var bundle = nonSampleBundle.concat(aureliaBundle, pluginsBundle);


module.exports = {
  "bundles": {
    "src/app-build": {
      "includes": bundle,
      "excludes": [
        "kendo-ui",
        "kendo-ui/**/*.js"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "rev": true
      }
    }
  }
}
