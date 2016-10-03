##  Relay.js

```javascript
Relay.QL`query { game }`
```

```javascript
Relay.createContainer(Foo, {
  fragments: {
    bar: () => Relay.QL`
      fragment on Bar {
        ${ChildComponent.getFragment('childFragmentName')},
      }
    `,
  }
});
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
