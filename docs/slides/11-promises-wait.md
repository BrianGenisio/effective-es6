##  `wait()`

```javascript
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

```javascript
wait(1000)
  .then(doSomething)
  .then(() => wait(2000))
  .then(doSomethingElse);
```

```javascript
await wait(1000)
doSomething();
await wait(2000);
doSomethingElse();
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
