const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphqlSchema = require('./graphql-schema')

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  graphiql: true
}));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`));