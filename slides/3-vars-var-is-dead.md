##  `var` is dead

```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
