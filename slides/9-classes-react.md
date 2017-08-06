##  React Components

```javascript
class Counter extends React.Component {
  state = {
      count: 0,
  }

  tick() {
    const {count} = this.state;
    this.setState({count: count + 1});
  }

  render() {
    const {count} = this.state;
    return <div onClick={() => this.tick()}>
      Clicks: {count}
    </div>;
  }
}

React.render(<Counter />, document.getElementById('app'));
```

[React Docs](https://facebook.github.io/react/docs/reusable-components.html)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
