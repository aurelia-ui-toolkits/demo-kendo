# aurelia-kendoui-plugin demo site

[![Live demo](http://dabuttonfactory.com/button.png?t=Live+demo&f=Calibri-Bold&ts=24&tc=fff&tshs=1&tshc=000&hp=20&vp=8&c=5&bgt=gradient&bgc=3d85c6&ebgc=073763)](http://aurelia-ui-toolkits.github.io/demo-kendo/)
[![Plugin repository](http://dabuttonfactory.com/button.png?t=Plugin+repository&f=Calibri-Bold&ts=24&tc=fff&tshs=1&tshc=000&hp=20&vp=8&c=5&bgt=gradient&bgc=3d85c6&ebgc=073763)](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin)

### How to run
1. `npm install`
2. `jspm registry create kendo jspm-git`
 1. base URL: **https://bower.telerik.com**
 2. Set advanced configurations? **yes**
 3. Would you like to use the default git repository suffix (.git)? **yes**
 4. Disable shallow git clones? **no**
 5. Enable authentication? **yes**
 6. Enter your Telerik credentials
3. `jspm install`
4. `gulp watch`

### pre-deploy checklist
1. update the [about page](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/blob/master/sample/src/about/about.html#L93-L203) with the current status of control development

### How to deploy from samples
1. remove the `src`, `styles` and `images` folder from the `demo-kendo` repository
2. copy from the aurelia-kendoui-plugin/sample folder, the `src`, `styles`, and `images` folder over to `demo-kendo`
3. `npm install`
4. `jspm registry create kendo jspm-git`
 1. base URL: **https://bower.telerik.com**
 2. Set advanced configurations? **yes**
 3. Would you like to use the default git repository suffix (.git)? **yes**
 4. Disable shallow git clones? **no**
 5. Enable authentication? **yes**
 6. Enter your Telerik credentials
5. install any new dependencies of the `sample` app in `demo-kendo`
6. `jspm install` or `jspm update`
7. `gulp deploy`
8. **push changes to the github repo**
