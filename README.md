# vuexchange

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Other issues

### Create project in current directory
```
vue create .
```

### Errors with npm run serve

#### Error
```
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
```
Solve with 
```
export NODE_OPTIONS=--openssl-legacy-provider`
```

#### Error
```
Syntax Error: Error: Cannot find module '@vue/cli-plugin-babel/preset'
```
Solve with
```
npm i -D eslint@6.8.0 @babel/core @babel/preset-env
```
and modify `babel.config.js` replace presets to:
```
presets: ["@babel/preset-env"],
```
