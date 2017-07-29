const graphql = require('graphql')
const users = require('./users.json')

const findById = (err, args) => {
  let response = users.find((user) => {
    return (user.id === args.id)
  })
  return response
}

let knowledgeType = new graphql.GraphQLObjectType({
  name: 'Knowledge',
  fields: {
    language: {
      type: graphql.GraphQLString
    },
    frameworks: {
      type: new graphql.GraphQLList(graphql.GraphQLString)
    }
  }
})

let weaponType = new graphql.GraphQLObjectType({
  name: 'weapon',
  fields: {
    name: {
      type: graphql.GraphQLString
    },
    type: {
      type: graphql.GraphQLString
    }
  }
})

let userType = new graphql.GraphQLObjectType({
  name: 'user',
  fields: {
    id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
    },
    name: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
    },
    city: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
    },
    weapons: {
      type: new graphql.GraphQLList(weaponType)
    }
  }
})

let schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      findById: {
        type: userType,
        args: {
          id: {
            type: graphql.GraphQLString
          }
        },
        resolve: findById
      }
    }
  })
})

module.exports = schema
