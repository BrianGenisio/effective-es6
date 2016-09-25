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

## Use this whenever you can
### React Components
### Redux Reducers
### What else?
