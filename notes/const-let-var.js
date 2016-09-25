# Prefer `const` over `let` over `var`

## The `var` keyword might as well be dead.
The `var` keyword was function scoped.  So the variable was the same no matter where you used it.  This caused subtle
bugs and unexpected behavior.  

(Example from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let))
```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
```

## The `const` and `let` keywords are BLOCK scoped

(Also from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let))
```javascript
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

## But prefer `const` over `let`
`const` means that the variable cannot change.  `let` means it can.  By always preferring `const` over `let`, you are
communicating to the user what is a variable, and what is a placeholder, meant to store something for readability, but isn't
actually variable.

```javascript
const people = getPeople();
const processedPeople = process(people);

for(let i = 0; i < processedPeople.length; i++) {
  const person = processedPeople[i];
  console.log(`We processed ${person.name}.`);
}
```

But really, the use of `for` loops in modern JavaScript is usually a sign that you can do it better and we can eliminate
`let` from the above code.

```javascript
  processedPeople
    .forEach(person => console.log(`We processed ${person.name}.`));
```

## Avoid using `let` without assignment
```javascript
let result;  // this reads funny

if(something === true) {
  result = 'love';
} else {
  result = `hate`;
}

return result;
```

Initialize it with something.  It isn't necessary, but it is more expressive
```javascript
let result = undefined;
```

Or, just eliminate the need for a variable completely.  Many times, the use of `let` is an indicator that your function
is doing too much, or there is a more concise way.

```javascript
return something === true ?
  'love' : 
  'hate';
```
