##  Avoid `let` without assignment

```javascript
let result;  // this reads funny
if(something === true) {
  result = 'love';
} else {
  result = `hate`;
}
return result;
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
