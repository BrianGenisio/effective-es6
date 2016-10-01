# Modules, Loaders, and Bundlers

## Modules
```javascript
import DisplayComponent from './display-component';

export default () => <DisplayComponent>Hello World</DisplayComponent>;
```

## Loaders
- We have a standard syntax to load modules
- We don't have a standard MECHANSIM to load modules 
- There are several implementations:
  - Require.js
  - System.js
  - Bit-Imports.js
  - More
  
But individual fiele loading over the browser, and HTTP/1.1 can be slow

## Bundlers
- Packages all of the dependencies into a single JS bundle
- Transforms while it packages (transpile, minify, etc)
- Creates one, large, single JS file to load via static analysis
- Several options
  - Browserify
  - Webpack
  - Bit-Bundler
