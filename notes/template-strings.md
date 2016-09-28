# Template Strings

## Template strings are good for Interpolation
```javascript
const source = "Ground Control";
const dest = "Major Tom";

console.log('<q>' + source + ' to ' + dest + '</q>');
console.log(`<q>${source} to ${dest}</q>`);
```

## Template strings are good for multi-line strings
```javascript
const header = "This is a header";
const body = "This is a body";
const footer = "This is a footer";

const oldHtml = '<div>' +
'  <h1>' + header + '</h1>' +
'  <p>' + body + '</p>' +
'  <footer>' + footer + '</footer>' +
'</div>;

const newHtml = `
<div>
  <h1>${header}</h1>
  <p>${body}</p>
  <footer>${footer}</footer>
</div>`;
```

## Template strings can be given processors, called "Tagged Templates"
### Relay.js
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


