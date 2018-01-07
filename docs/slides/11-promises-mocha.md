##  Mocha

```javascript
const fs = require('fs-promise');

it('reads some file', function() {
  return fs.readFile('someFile.json')
    .then(function(data) {
      assert(data != null, "File should exist.");
    });
});
```

[tobyho](http://tobyho.com/2015/12/16/mocha-with-promises/)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
