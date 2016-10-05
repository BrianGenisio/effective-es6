##  Old Way

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

note:
    Put your speaker notes here.
    You can see them pressing 's'.
