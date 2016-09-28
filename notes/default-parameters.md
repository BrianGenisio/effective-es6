# Default Parameters

## Default Parameters are useful
```javascript
function add(a=0, b=0) {
  return a + b;
}
```

## You can avoid undefined references
```javascript
function printUser(u = {first: 'Barak', last: 'Obama'}) {
  console.log(u.first, u.last);
}
```

## Paired with object destructuring, you can even create defaults for everything
```javascript
function printUser({first: 'Barak', last: 'Obama'}) {
  console.log(first, last);
}
```

## You can treat default parameters as type documentation
```javascript
function printUserMultiple({first: '', last: ''}, times=0) {
  for(let i=0; i<times; i++) {
    console.log(first, last);
  }
}
```

## Redux uses default parameters as the initial state for reducers
From [Redux docs](http://redux.js.org/docs/basics/Reducers.html)

```javascript
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}
```
