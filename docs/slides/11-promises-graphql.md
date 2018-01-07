##  GraphQL

```javascript
const schema = buildSchema(`type Query { random: Float! }`);

// The root provides a resolver function for each API endpoint
const root = {
  random: () => fetchRandom()
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root
}));
app.listen(4000);
```
[GraphQL.org](http://graphql.org/graphql-js/basic-types/)

note:
    Put your speaker notes here.
    You can see them pressing 's'.
