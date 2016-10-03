##  Immutable remove

```javascript
function remove(list=[], index=0) {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
}
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
