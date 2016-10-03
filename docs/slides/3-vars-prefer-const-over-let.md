##  Prefer `const` over `let`

```javascript
const people = getPeople();
const processedPeople = process(people);

for(let i = 0; i < processedPeople.length; i++) {
  const person = processedPeople[i];
  console.log(`We processed ${person.name}.`);
}
```

note:
    `const` means that the variable cannot change.  `let` means it can.  By always preferring `const` over `let`, you are
communicating to the user what is a variable, and what is a placeholder, meant to store something for readability, but isn't
