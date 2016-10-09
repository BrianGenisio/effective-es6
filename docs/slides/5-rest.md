## "rest" parameters

```javascript
function addFriends(person, ...friends) {
    return {
        ...person,
        friends: [
            person.friends,
            ...friends
        ]
    }
}
```

```javascript
addFriends(zach, 
    {first: "Kelly",  last: "Kapowski"},
    {first: "A.C",    last: "Slater"  },
    {first: "Samuel", last: "Powers"  }
);
```
<!-- .element: class="fragment" -->