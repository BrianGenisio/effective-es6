##  Redux reducers

```javascript
function todoApp(state = initialState, {type, filter}) {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: filter
      });

    default:
      return state;
  }
}
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
