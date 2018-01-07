##  Array Push

```javascript
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
Array.prototype.push.apply(arr1, arr2);
```

Becomes

```javascript
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
arr1.push(...arr2);
```
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
