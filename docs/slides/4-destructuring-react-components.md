##  React Components

```javascript
var InformativeComponent = React.createClass({
  render: function() {
    const {heading, body, footer} = this.props;

    return <div>
      <h1>{heading}</h1>
      <p>{body}</p>
      <footer>{footer}</footer>
    </div>;
  }
});
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
