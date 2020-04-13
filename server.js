const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const CORS = require('cors')

const app = express();

//Allow cross-origin
app.use(CORS())

app.use('/graphql', graphqlHTTP({
  schema,  // database schema
  graphiql: true  // this is graphql client for writing and mutating queries
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log("server running on port", PORT))