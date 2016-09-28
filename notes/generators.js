## Iterators and Generators


```javascript
function* getSomeThings() {
  yield 1;
  yield 2;
  yield 3;
}
```

```javascript
for(let thing of getSomeThings()) {
  console.log(thing);
}
```

```javascript
function* uniqueIds(){
  var index = 0;
  while(true)
    yield index++;
}

const ids = uniqueIds();

console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
```

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


## Generators can receive a value when control is returned
###Here is an example of using co.js

```javascript
co(function* modifyUser() {
  const user = yield fetchUser(id);
  user.name = "Changed";

  const result = yield storeUser(id);
  
  return result.ok ? user : result.error;
});
```

### Here is an example of Redux Sagas
```javascript
function* fetchUser(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}
```
