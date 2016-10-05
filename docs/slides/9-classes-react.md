##  React Components

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

[React Docs](https://facebook.github.io/react/docs/reusable-components.html)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
