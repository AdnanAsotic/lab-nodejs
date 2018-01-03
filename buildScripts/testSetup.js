// let babel transpile first
require('babel-register')();

// ignore css
require.extensions['.css'] = function() {};

