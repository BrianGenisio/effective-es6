# Object and Array Destructuring

## Definition
From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment):
> The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.

So code like this:
```javascript
const first = this.props.first;
const last = this.props.last;
```

Becomes this:
```javascript
const {first, last} = this.props;
```

## You can do it to arrays too!
```javascript
const [firstPlace, secondPlace] = winnersList;
```

## A clever way to swap variables without `temp`
```javascript
let a = 1;
let b = 2;

[b, a] = [a, b];

console.log(a, b); // 2, 1
```

## Use this whenever you can to make code more expressive

### React Components
```javascript
var InformativeComponent = React.createClass({
  render: function() {
    const {heading, body, footer} = this.props;
    
    return <div>
      <h1>{heading}</h1>
      <p>{body}</p>
      <footer>{footer}</footer>
    </div>;
  }
});
```

### Redux Reducers
```javascript
function todoApp(state = initialState, {type, filter}) {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: filter
      });
      
    default:
      return state;
  }
}
```

### Passing correlated data
```javascript
function filterTeam(teams=[], {start, end}, teamName) {
  return teams
    .filter(t => t.start >= start && t.end <= end)
    .filter(t => t.name.includes(teamName);
}

function handleClick() {
  const {start, end, teams, teamName} = this.props;
  const filtered = filterTeam(teams, {start, end}, teamName);

  // ...
}
```

