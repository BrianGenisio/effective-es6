##  Sequelize.js

```javascript
var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'username', 'password');

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(jane.get({plain: true}));
});
```

[Sequelize Docs](http://docs.sequelizejs.com/en/v3/)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
