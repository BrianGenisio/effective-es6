## Iterators are two-way!

```javascript
function* getValues() {
  let first = yield 1;
  let second = yield 2 * first;
  yield 3 * second;
}

let generator = getValues();
console.log(generator.next());    // {value: 1, done: false}
console.log(generator.next(100)); // {value: 200, done: false}
console.log(generator.next(200)); // {value: 600, done: false}
console.log(generator.next());    // {done: true}
```