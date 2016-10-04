##  Bonus Time!
### Async/Await

```javascript
var foo = async (function() {
    var resultA = await (firstAsyncCall());
    var resultB = await (secondAsyncCallUsing(resultA));
    var resultC = await (thirdAsyncCallUsing(resultB));
    return doSomethingWith(resultC);
});
```

[yortus/asyncawait](https://github.com/yortus/asyncawait)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
