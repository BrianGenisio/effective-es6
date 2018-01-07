##  React Components

```javascript
class InformativeComponent extends React.createClass {
  render() {
    const {heading, body, footer} = this.props;

    return <div>
      <h1>{heading}</h1>
      <p>{body}</p>
      <footer>{footer}</footer>
    </div>;
  }
}
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
