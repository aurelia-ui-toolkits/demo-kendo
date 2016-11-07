# aurelia-kendoui-plugin demo site
    
[![Live demo](http://dabuttonfactory.com/button.png?t=Live+demo&f=Calibri-Bold&ts=24&tc=fff&tshs=1&tshc=000&hp=20&vp=8&c=5&bgt=gradient&bgc=3d85c6&ebgc=073763)](http://aurelia-ui-toolkits.github.io/demo-kendo/)
[![Plugin repository](http://dabuttonfactory.com/button.png?t=Plugin+repository&f=Calibri-Bold&ts=24&tc=fff&tshs=1&tshc=000&hp=20&vp=8&c=5&bgt=gradient&bgc=3d85c6&ebgc=073763)](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin)

### How to run
1. `npm install`
2. `jspm install`
3. `gulp watch`

### How to deploy from samples
1. remove the `src`, `styles` and `images` folder from the `demo-kendo` repository
2. copy from the aurelia-kendoui-plugin/sample folder, the `src`, `styles`, `images` folder over to `demo-kendo`
3. update the plugin: `jspm install aurelia-kendoui-bridge`
4. run `gulp watch` and verify that everything runs correctly, and that there are no errors in the console
5. `gulp deploy`
6. **push changes made by `gulp deploy` to the github repo**
