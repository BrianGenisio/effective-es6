# Classes

Classes are good when you want the class syntax or when you want inheritance.  Don't overdo it, but don't avoid them completely.  They can be extremely expressive!

## React component
From [React docs](https://facebook.github.io/react/docs/reusable-components.html)
```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {count: 0};
  }
  
  tick() {
    this.setState({count: this.state.count + 1});
  }
  
  render() {
    return (
      <div onClick={() => this.tick()}>
        Clicks: {this.state.count}
      </div>
    );
  }
}

React.render(<Counter />, document.getElementById('app'));
```

## Angular 2 component
From [LearnAngular2.com](http://learnangular2.com/components/)

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
