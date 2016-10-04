##  Co.js

### Co-Routines and 2-way `yields`

```javascript
co(function* modifyUser() {
  const user = yield fetchUser(id);
  user.name = "Changed";

  const result = yield storeUser(id);
  
  return result.ok ? user : result.error;
});
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
