## Const

```javascript
function constTest() {
    const friends = findFriends();

    // evaluation error!
    friends = otherFriends();

    // This is ok.
    friends.push({first: "Zach", last: "Morris"});
    friends.fun = "Talking on cell phones";
}
```

### `const` does not mean immutable.
<!-- .element: class="fragment" -->
