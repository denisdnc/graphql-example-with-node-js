const graphql = require('graphql')
const graphqlHTTP = require('express-graphql')
const express = require('express')
const userSchema = require('./userSchema')

const app = express()

app.use('/user', graphqlHTTP({
  schema: userSchema,
  pretty: true,
  graphiql: true
}))

app.listen(3000, function() {
  console.log('Server started at localhost:3000')
})
