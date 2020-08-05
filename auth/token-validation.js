const { verify } = require("jsonwebtoken");

module.exports = {
  checkToken: (request, response, next) => {
    let token = request.get("authorization");

    if (token) {
      token = token.slice(7);
      verify(token, "fer1024", (error, decoded) => {
        if (error) {
          console.log("TOKEN INVALIDO");
          response.json({
            state: "fail",
            message: "Invalid token",
            dataValues: null,
          });
        } else {
          console.log("TOKEN SUCCESS");
          next();
        }
      });
    } else {
      console.log("ACCESO DENEGADO");
      response.json({
        state: "fail",
        message: "Access denied! aunautorized user",
        dataValues: null,
      });
    }
  },
};
