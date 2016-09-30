# Promises

## Intro
Let's say you have a function which takes a callback and error handler:
```javascript
doSomething(result => processResult(result), err => handleError(err));
```

You can wrap that in a promise with a well-known API

```javascript
  new Promise((resolve, reject) => {
    doSomething(result => resolve(result), error => reject(error));
  })
  .then(processResult)
  .catch(handleError);
```

Here is an example of turning `setTimeout` into a promise.  Wait one second, do something, wait two seconds, do something else:

```javascript
setTimeout(() => {
  doSomething();
  setTimeout(doSomethingElse, 2000);
}, 1000);
```

```javascript
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(1000)
  .then(doSomething)
  .then(() => wait(2000))
  .then(doSomethingElse);
```

## Fetch api

## Other examples
