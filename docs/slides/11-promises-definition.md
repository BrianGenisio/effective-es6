##  A more fluent interface

```javascript
doSomething(result => processResult(result), err => handleError(err));
```

```javascript
doSomething()
  .then(processResult)
  .catch(handleError);
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
