// var _ = require('lodash');
var uniqBy = require('lodash/uniqBy')
var arr = [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 1 }];
// var newArr = _.uniqBy(arr, 'x');
var newArr = uniqBy(arr, 'x');

console.log(newArr);
