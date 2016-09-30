#Property Shorthand

## Take this example:
```javascript
function create(first, last) {
  const headers = getHeaders();
  
  return fetch('/users', {
    method: 'post',
    headers: headers,
    body: JSON.stringify({
      first: first,
      last: last
    })
  });
}
```

Notice how there is a lot of redundancy?

```javascript
function create(first, last) {
  const headers = getHeaders();
  
  return fetch('/users', {
    method: 'post',
    headers,
    body: JSON.stringify({first, last})
  });
}
```

Much more expresive.  Use this wherever you can.

While we're at it, look at the other shortcuts you can take:

```javascript
const thing = {
  func: function() {
    return true;
  }
};
thing[field] = 'something';
```

And you can clean it up:
```javascript
const thing = {
  func() {
    return true;
  },
  
  [field]: 'something'
};

These are really just shortcuts, but they make your code more expressive.
