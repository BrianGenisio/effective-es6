##  Iterators usage

```javascript
const iterator = getIterator();
let step = undefined;

while((step = it.next()) && !step.done) {
  console.log(step.value);
}
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
