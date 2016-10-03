##  Long Live Block Scoping!

```javascript
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
