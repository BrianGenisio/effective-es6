##  Immutable Objects

```javascript
const me = {first: 'Brian', last: 'Genisio', hair: 'dark brown'};

const modified = Object.assign({}, me, {hair: 'none'});

const newModified = {...me, hair: 'none'};
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
