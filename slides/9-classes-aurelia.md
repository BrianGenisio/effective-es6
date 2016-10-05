##  Aurelia Component

```javascript
export class Hello {
  firstName = 'John';
  lastName = 'Doe';

  sayHello() {
    alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
  }
}
```
```html
<template>
  <input value.bind="firstName">
  <input value.bind="lastName">

  <p>
    Name: ${firstName} ${lastName}
  </p>

  <button click.trigger="sayHello()">Say Hello</button>
</template>
```

[Aurelia Docs](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/creating-components/1)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
