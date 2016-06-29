# Demo GRIPT Project

## Installing GRIPT

### Installing packages

```sh
npm init
npm install gulp --save-dev
npm install gript --save-dev
```

### Creating configuration files

```sh
cp node_modules/gript/sample_configs/gulpfile.js .
cp node_modules/gript/sample_configs/bower.json .
cp node_modules/gript/sample_configs/tslint.json .
cp node_modules/gript/sample_configs/.eslintrc.yml .
cp node_modules/gript/sample_configs/.htmllintrc .
```

### Setting up the Gulp files

In `gulpfile.js`

#### App module

```js
app: {
  module: 'GriptDemoApp',
  constantsFile: 'app/constants.json'
},
```
