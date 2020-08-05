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
//rootValue Graphql
var root = require("./root/root");

app.get("/", function(request, response) {
  console.log(process.env.APP_MESSAGE_SUCCESS);
});

/** */
app.post("/login", async function(request, response) {
  console.log("POST/login");
  console.log(request.body.email);
  console.log(request.body.password);
  let res = await root.loginAuth(request.body);
  response.status(200).json(res);
});
/**/

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

console.log("Backql en http://localhost:" + process.env.APP_PORT);
app.listen(process.env.APP_PORT);
