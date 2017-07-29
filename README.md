# GraphQL simple query example in Node JS

### instructions
- clone repository
- run "npm install"
- run "node index.js"
- access: http://localhost:3000/user
- run query:

{
  findById(id: "1") {
    id
    name
    city
    weapons {
      name
      type
    }
  }
}

![query_example](https://i.imgur.com/esHpY7Y.png)

