##  fetch

```javascript
fetch('/users.json')
  .then(response => response.json())
  .then(users => processUsers(users))
  .catch(ex => displayError(ex));
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
