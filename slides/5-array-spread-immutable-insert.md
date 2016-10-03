##  Immutable insert

```javascript
function insert(list=[], index=0, item) {
  return [
    ...list.slice(0, index),
    item,
    ...list.slice(index)
  ];
}
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
