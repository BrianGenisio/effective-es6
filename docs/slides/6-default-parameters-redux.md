##  Redux Reducers

```javascript
function todoApp(state = {}, {type, filter}) {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return {
          ...state,
          visibilityFilter: filter,
      };
      
    default:
      return state;
  }
}
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
