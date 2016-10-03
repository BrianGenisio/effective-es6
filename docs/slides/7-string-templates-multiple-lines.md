##  Multi-line

```javascript
const header = "This is a header";
const body = "This is a body";
const footer = "This is a footer";

const oldHtml = '<div>' +
'  <h1>' + header + '</h1>' +
'  <p>' + body + '</p>' +
'  <footer>' + footer + '</footer>' +
'</div>';

const newHtml = `
<div>
  <h1>${header}</h1>
  <p>${body}</p>
  <footer>${footer}</footer>
</div>`;
```

note:
    Put your speaker notes here.
    You can see them pressing 's'.
