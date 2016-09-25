# Interesting usage of arrow functions

## Arrow Functions
Turn this
```javascript
function(a, b, c) {
  return a + b + c;
}
```

To this:
```javascript
(a, b, c) => a + b + c;
```

## Makes filter, map, reduce a lot nicer
```javascript
const managerSalaries = employees
  .filter(employee => employee.isManager)
  .map(manager => manager.salary)
  .reduce((sum, salary) => sum + salary, 0);
```

## Lexical scope
`this` is always the `this` of outside the arrow function.
In other words, never need to write `const self = this` again!
```javascript
employees.map(employee => this.getDetails(employee));
```

## Stateless Functional Components in React
```javascript
const InformativeComponent = props => 
  <div>
    <h1>{props.heading}</h1>
    <p>{props.body}</p>
    <footer>{props.footer}</footer>
  </div>;
```

### Object Destructuring same thing
```javascript
const InformativeComponent = ({heading, body, footer}) => 
  <div>
    <h1>{heading}</h1>
    <p>{body}</p>
    <footer>{footer}</footer>
  </div>;
```

### Might as well add default properties
```javascript
const InformativeComponent = ({
  heading = "This is a heading", 
  body = "This is a body",
  footer = "This is a footer"}) => 
  <div>
    <h1>{heading}</h1>
    <p>{body}</p>
    <footer>{footer}</footer>
  </div>;
```



