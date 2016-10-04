##  Factorial Example

```javascript
function* Factorial() {
  let n = 1;
  let total = 1;
  
  while (true) {
    total = total * n++;
    yield total;
  };
}

const factorial = Factorial();
console.log(factorial.next().value);
console.log(factorial.next().value);
console.log(factorial.next().value);
console.log(factorial.next().value);
console.log(factorial.next().value);
```


note:
    Put your speaker notes here.
    You can see them pressing 's'.
