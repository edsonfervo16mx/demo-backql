require("dotenv").config();
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

//Sequelize
var Model = require("./models/index");

//Express-graphql
const { graphqlHTTP } = require("express-graphql");

//Schema Graphql
var schema = require("./schema/schema");
//var typeDefs = require("./schema/schema");
//rootValue Graphql
var root = require("./root/root");

//realtime
//const { GraphQLServer } = require("graphql-yoga");

app.get("/", function(request, response) {
  console.log(process.env.APP_MESSAGE_SUCCESS);
});

app.post("/login", async function(request, response) {
  console.log("POST/login");
  console.log(request.body.email);
  console.log(request.body.password);
  let res = await root.loginAuth(request.body);
  response.status(200).json(res);
});

app.post("/token", async function(request, response) {
  console.log("POST/token");
  console.log(request.body.email);
  console.log(request.body.code);
  console.log(request.body.refreshToken);
  let res = await root.refreshAuth(request.body);
  response.status(200).json(res);
});

app.post("/token/reject", async function(request, response) {
  console.log("POST/token/reject");
  console.log(request.body.refreshToken);
  let res = await root.rejectAuth(request.body);
  response.status(200).json({
    state: "fail",
    message: "reject token",
    dataValues: null,
  });
});

app.post("/signin", async function(request, response) {
  console.log("POST/signin");
  console.log(request.body.email);
  console.log(request.body.password);
  console.log(request.body.empresa);
  let res = await root.signin(request.body);
  response.status(200).json(res);
});

const { checkToken } = require("./auth/token-validation");

app.use(
  "/graphql",
  checkToken,
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
/*
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (name) => `Hello ${name || "World"}`,
  },
};

app.use(new GraphQLServer({ typeDefs, resolvers }));

/** */

//import { GraphQLServer } from "graphql-yoga";
// ... or using `require()`
/*
const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query: {
    
    esqueletos: () => {
      let datos = [
        {
          id: 1,
          name: "esq1",
          fecha: new Date(),
        },
        {
          id: 2,
          name: "esq2",
          fecha: new Date(),
        },
      ];
      return datos;
      
    },

    addEsqueleto: (DataRequest) =>{

    }
  },
};

const typeDefs = `
scalar DateTime
type Esqueleto{
id: Int!
name: String!
fecha: DateTime
}

type Query{
    esqueletos: [Esqueleto]
}

type Mutation{
  addEsqueleto(id: Int, name: String, fecha: DateTime): Esqueleto
}

`;

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));


/** */
/*
const { GraphQLServer, PubSub } = require("graphql-yoga");

const typeDefs = `
  type Query {
    hello: String!
  }
  type Counter {
    count: Int!
    countStr: String
  }
  type Subscription {
    counter: Counter!
  }
`;

const resolvers = {
  Query: {
    hello: () => `Hello`,
  },
  Counter: {
    countStr: (counter) => `Current count: ${counter.count}`,
  },
  Subscription: {
    counter: {
      subscribe: (parent, args, { pubsub }) => {
        const channel = Math.random()
          .toString(36)
          .substring(2, 15); // random channel name
        let count = 0;
        setInterval(
          () => pubsub.publish(channel, { counter: { count: count++ } }),
          2000
        );
        return pubsub.asyncIterator(channel);
      },
    },
  },
};

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

server.start(() => console.log("Server is running on localhost:4000"));
/** */
console.log("Backql en http://localhost:" + process.env.APP_PORT);
app.listen(process.env.APP_PORT);
