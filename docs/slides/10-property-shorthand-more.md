##  More Capabilities

```javascript
const thing = {
  func: function() {
    return true;
  }
};
thing[field] = 'something';
Object.defineProperty(thing, "blah", { get: function () { return 8; } });
```

```javascript
const thing = {
  func() {
    return true;
  },

  [field]: 'something',

  get blah() {
    return 8;
  }
};
```
<!-- .element: class="fragment" -->

note:
    Put your speaker notes here.
    You can see them pressing 's'.
