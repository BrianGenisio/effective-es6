##  With Property Shorthand

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

note:
    Put your speaker notes here.
    You can see them pressing 's'.
