# Array Spread

## Syntactical sugar for `function.apply`
Example from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

```javascript
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);
```

Becomes

```javascript
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);
```

## Array spreading can be used in other arrays:
```javascript
const a = [2, 3, 4];
const b = [1, ...a, 5]; // [1, 2, 3, 4, 5]
```

## Concatenate arrays
```javascript
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

const concatenated = [
  ...a,
  ...b,
  ...c
];
```
## A better push
From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
```javascript
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
Array.prototype.push.apply(arr1, arr2);
```

Becomes
```javascript
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
```

## Immutable Operations
```javascript
function append(list=[], item) {
  return [...list, item];
}

function prepend(list=[], item) {
  return [item, ...list];
}

function remove(list=[], index=0) {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
}

function insert(list=[], index=0, item) {
  return [
    ...list.slice(0, index),
    item,
    ...list.slice(index)
  ];
}

function replace(list=[], index=0, item) {
  return [
    ...list.slice(0, index),
    item,
    ...list.slice(index + 1)
  ];
}
```

## Coming soon: Object Spread
```javascript
const me = {first: 'Brian', last: 'Genisio'};
const copy = {...me};
const extendedCopy = {...me, hair: 'dark brown'};
```

## Immutable object manipulation
Old way:
```javascript
const me = {first: 'Brian', last: 'Genisio', hair: 'dark brown';

const modified = Object.assign({}, me, {hair: 'none'});

const newModified = {...me, hair: 'none'};
```
