##  Lexical Scope

`this` is always the `this` of outside the arrow function.

```javascript
employees.map(employee => this.getDetails(employee));
```

<div>
You never need to write `var self = this` again!
</div>
<!-- .element: class="fragment" -->

note:
    Put your speaker notes here.
    You can see them pressing 's'.
