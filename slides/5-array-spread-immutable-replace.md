##  Immutable replace

```javascript
function replace(list=[], index=0, item) {
  return [
    ...list.slice(0, index),
    item,
    ...list.slice(index + 1)
  ];
}
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
