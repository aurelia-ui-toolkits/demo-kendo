System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system",
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "src/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "kendo:*": "jspm_packages/kendo/*"
  },
  bundles: {
    "app-build-c49921f7c9": [
      "about/about",
      "about/about.html!github:systemjs/plugin-text@0.0.3",
      "app",
      "app.html!github:systemjs/plugin-text@0.0.3",
      "github:PrismJS/prism@1.3.0",
      "github:PrismJS/prism@1.3.0/prism",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/autocomplete/autocomplete",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/button/button",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/chart/chart",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/chart/chart.html!github:systemjs/plugin-text@0.0.3",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/chart/sparkline",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/chart/sparkline.html!github:systemjs/plugin-text@0.0.3",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/chart/stock",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/chart/stock.html!github:systemjs/plugin-text@0.0.3",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/chart/treemap",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/chart/treemap.html!github:systemjs/plugin-text@0.0.3",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/colorpicker/colorpicker",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/combobox/combobox",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/common/constants",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/common/decorators",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/common/events",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/common/index",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/common/options",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/common/template-compiler",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/common/util",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/common/widget-base",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/dropdownlist/dropdownlist",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/grid/au-col",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/grid/grid",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/grid/grid.html!github:systemjs/plugin-text@0.0.3",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/index",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/menu/menu",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/menu/menu.html!github:systemjs/plugin-text@0.0.3",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/pdf/pdf",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/progressbar/progressbar",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/scheduler/scheduler",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/slider/slider",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/tabstrip/tabstrip",
      "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master/toolbar/toolbar",
      "github:components/jquery@2.1.4",
      "github:components/jquery@2.1.4/jquery",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "github:showdownjs/showdown@1.3.0",
      "github:showdownjs/showdown@1.3.0/dist/showdown",
      "github:systemjs/plugin-css@0.1.20",
      "github:systemjs/plugin-css@0.1.20/css",
      "github:systemjs/plugin-text@0.0.3",
      "github:systemjs/plugin-text@0.0.3/text",
      "github:twbs/bootstrap@3.3.6",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-text@0.0.3",
      "github:twbs/bootstrap@3.3.6/js/bootstrap",
      "help/doc",
      "help/doc.html!github:systemjs/plugin-text@0.0.3",
      "help/help",
      "help/help.html!github:systemjs/plugin-text@0.0.3",
      "help/registry.json!github:systemjs/plugin-json@0.1.0",
      "installation/index",
      "installation/index.html!github:systemjs/plugin-text@0.0.3",
      "main",
      "nav-bar",
      "nav-bar.html!github:systemjs/plugin-text@0.0.3",
      "npm:aurelia-binding@1.0.0-beta.1.0.3",
      "npm:aurelia-binding@1.0.0-beta.1.0.3/aurelia-binding",
      "npm:aurelia-bootstrapper@1.0.0-beta.1",
      "npm:aurelia-bootstrapper@1.0.0-beta.1/aurelia-bootstrapper",
      "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "npm:aurelia-dependency-injection@1.0.0-beta.1/aurelia-dependency-injection",
      "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "npm:aurelia-event-aggregator@1.0.0-beta.1/aurelia-event-aggregator",
      "npm:aurelia-framework@1.0.0-beta.1.0.7",
      "npm:aurelia-framework@1.0.0-beta.1.0.7/aurelia-framework",
      "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
      "npm:aurelia-history-browser@1.0.0-beta.1.0.1/aurelia-history-browser",
      "npm:aurelia-history@1.0.0-beta.1",
      "npm:aurelia-history@1.0.0-beta.1/aurelia-history",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.1/aurelia-loader-default",
      "npm:aurelia-loader@1.0.0-beta.1",
      "npm:aurelia-loader@1.0.0-beta.1/aurelia-loader",
      "npm:aurelia-logging-console@1.0.0-beta.1",
      "npm:aurelia-logging-console@1.0.0-beta.1/aurelia-logging-console",
      "npm:aurelia-logging@1.0.0-beta.1",
      "npm:aurelia-logging@1.0.0-beta.1/aurelia-logging",
      "npm:aurelia-metadata@1.0.0-beta.1",
      "npm:aurelia-metadata@1.0.0-beta.1/aurelia-metadata",
      "npm:aurelia-pal-browser@1.0.0-beta.1.0.1",
      "npm:aurelia-pal-browser@1.0.0-beta.1.0.1/aurelia-pal-browser",
      "npm:aurelia-pal@1.0.0-beta.1.0.1",
      "npm:aurelia-pal@1.0.0-beta.1.0.1/aurelia-pal",
      "npm:aurelia-path@1.0.0-beta.1",
      "npm:aurelia-path@1.0.0-beta.1/aurelia-path",
      "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "npm:aurelia-route-recognizer@1.0.0-beta.1/aurelia-route-recognizer",
      "npm:aurelia-router@1.0.0-beta.1",
      "npm:aurelia-router@1.0.0-beta.1/aurelia-router",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1/aurelia-task-queue",
      "npm:aurelia-templating-binding@1.0.0-beta.1.0.2",
      "npm:aurelia-templating-binding@1.0.0-beta.1.0.2/aurelia-templating-binding",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/analyze-view-factory",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/array-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/aurelia-templating-resources",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/compile-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/compose",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/css-resource",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/dynamic-element",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/focus",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/if",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/map-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/null-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/number-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/repeat",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/repeat-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/repeat-utilities",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/replaceable",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/show",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/view-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.3/with",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.4",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.4/aurelia-templating-router",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.4/route-href",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.4/route-loader",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.4/router-view",
      "npm:aurelia-templating@1.0.0-beta.1.0.2",
      "npm:aurelia-templating@1.0.0-beta.1.0.2/aurelia-templating",
      "npm:core-js@1.2.6",
      "npm:core-js@1.2.6/client/shim.min",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "sample-runner",
      "sample-runner.html!github:systemjs/plugin-text@0.0.3",
      "samples/autocomplete/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/button/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/area-charts/binding-to-local-data.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/area-charts/json/spain-electricity.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/area-charts/json/stock-data-2011.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/area-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/bar-charts/binding-to-local-data.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/bar-charts/json/spain-electricity.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/bar-charts/json/stock-data-2011.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/bar-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/box-plot-charts/json/ozone.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/box-plot-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/bubble-charts/binding-to-local-data.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/bubble-charts/json/crime-stats.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/bubble-charts/json/olympics-japan.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/bubble-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/bullet-charts/json/april-sales.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/bullet-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/donut-charts/json/screen-resolution.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/donut-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/funnel-charts/json/spain-electricity.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/funnel-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/line-charts/binding-to-local-data.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/line-charts/json/spain-electricity.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/line-charts/json/stock-data-2011.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/line-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/pie-charts/json/screen_resolution.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/pie-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/polar-charts/json/antenna-gain.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/polar-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/radar-charts/binding-to-local-data.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/radar-charts/json/budget-report.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/radar-charts/json/wind-data.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/radar-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/range-charts/json/download-speed.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/range-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/scatter-charts/binding-to-local-data.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/scatter-charts/json/price-performance.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/scatter-charts/json/stock-data-2011.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/scatter-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/sparkline/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/stock/json/boeing-stock.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/stock/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/treemap/json/population-usa.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/treemap/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/waterfall-charts/binding-to-local-data.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/waterfall-charts/json/pocket-price.json!github:systemjs/plugin-json@0.1.0",
      "samples/chart/waterfall-charts/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/combobox/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/dropdownlist/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/grid/binding-to-local-data.json!github:systemjs/plugin-json@0.1.0",
      "samples/grid/editing-custom-editor.json!github:systemjs/plugin-json@0.1.0",
      "samples/grid/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/menu.json!github:systemjs/plugin-json@0.1.0",
      "samples/menu/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/progressbar/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/scheduler/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/slider/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/tabstrip/registry.json!github:systemjs/plugin-json@0.1.0",
      "samples/toolbar/registry.json!github:systemjs/plugin-json@0.1.0",
      "settings",
      "shared/au-code",
      "shared/collapse-panel",
      "shared/collapse-panel.html!github:systemjs/plugin-text@0.0.3",
      "shared/gitter-sidecar",
      "shared/gitter-sidecar.html!github:systemjs/plugin-text@0.0.3",
      "shared/logger",
      "shared/logger.html!github:systemjs/plugin-text@0.0.3",
      "shared/markdown",
      "shared/registry",
      "shared/showcase.html!github:systemjs/plugin-text@0.0.3",
      "shared/theme-manager",
      "theme-selector/theme-selector",
      "theme-selector/theme-selector.html!github:systemjs/plugin-text@0.0.3"
    ]
  },

  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.0.1",
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.3",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.7",
    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1",
    "aurelia-kendoui-plugin": "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "clean-css": "npm:clean-css@3.4.8",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "fetch": "github:github/fetch@0.10.1",
    "font-awesome": "npm:font-awesome@4.5.0",
    "jquery": "github:components/jquery@2.1.4",
    "json": "github:systemjs/plugin-json@0.1.0",
    "kendo-ui": "kendo:bower-kendo-ui@2015.3.1214",
    "prism": "github:PrismJS/prism@1.3.0",
    "showdown": "github:showdownjs/showdown@1.3.0",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:aurelia-ui-toolkits/aurelia-kendoui-plugin@master": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.7",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2",
      "jquery": "github:components/jquery@2.1.4"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2"
    },
    "npm:aurelia-binding@1.0.0-beta.1.0.3": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.7",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.0.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.3",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.4",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1"
    },
    "npm:aurelia-fetch-client@1.0.0-beta.1.0.1": {
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-framework@1.0.0-beta.1.0.7": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.0.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-http-client@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.0.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-loader@1.0.0-beta.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-router@1.0.0-beta.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.3",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.0.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.0.4": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2"
    },
    "npm:aurelia-templating@1.0.0-beta.1.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:clean-css@3.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
