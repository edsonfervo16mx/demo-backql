require("dotenv").config();
var express = require("express");
var app = express();

var formidable = require("express-formidable");

app.use(
  formidable({
    keepExtensions: true,
    encoding: "utf-8",
  })
);

//Sequelize
var Model = require("./models/index");

//Express-graphql
const { graphqlHTTP } = require("express-graphql");

//Graphql
var { buildSchema } = require("graphql");

//Schema Graphql
var schema = require("./schema/schema");
//rootValue Graphql
var root = require("./root/root");

//JWT
const { sign } = require("jsonwebtoken");
var randtoken = require("rand-token");
/*
const logingMiddleware = (request, response, next) => {
  root.loginAuth(request);
  console.log("loginMiddleware...");
  next();
};
/** */

//const { checkToken } = require("./auth/token-validation");

app.get("/", function(request, response) {
  console.log(process.env.APP_MESSAGE_SUCCESS);
});

/** */
app.post("/login", async function(request, response) {
  console.log("POST/login");
  console.log(request.fields);
  let res = await root.loginAuth(request.fields);
  response.json(res);
});
/**/

//app.use(logingMiddleware);
//app.use(checkToken);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

console.log("Backql en http://localhost:" + process.env.APP_PORT);
app.listen(process.env.APP_PORT);
