##  Angular 2 Components

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `<div>
    Hello my name is {{name}}. 
    <button (click)="sayMyName()">Say my name</button>
  </div>`
})
export class MyComponent {
  constructor() {
    this.name = 'Max'
  }
  sayMyName() {
    console.log('My name is', this.name)
  }
}
```

[LearnAngular2.com](http://learnangular2.com/components/)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
