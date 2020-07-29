require("dotenv").config();
var express = require("express");
var app = express();

//Sequelize
var Model = require("./models/index");

//Express-graphql
const { graphqlHTTP } = require("express-graphql");

//Graphql
var { buildSchema } = require("graphql");

//Schema Graphql
var schema = require("./schema/schema");

var DataResponse = [];

var root = {
  //--------------------------------------------
  empresas: async () => {
    let Data = await Model.Empresa.findAll();
    try {
      var counter = 0;
      Data.forEach((element) => {
        DataResponse[counter] = Data[counter]["dataValues"];
        counter++;
      });
      console.log(DataResponse);
      return DataResponse;
    } catch (err) {
      console.log(err);
    }
  },

  addEmpresa: async (DataRequest) => {
    let Data = await Model.Empresa.create({
      name: DataRequest.name,
      description: DataRequest.description,
      logo: DataRequest.logo,
      location: DataRequest.location,
      rfc: DataRequest.rfc,
      slogan: DataRequest.slogan,
      mail: DataRequest.mail,
      telephone: DataRequest.telephone,
      website: DataRequest.website,
    });

    try {
      return Data;
    } catch (err) {
      console.log(err);
    }
  },

  updateEmpresa: async (DataRequest) => {
    let Data = await Model.Empresa.update(
      {
        name: DataRequest.name,
        description: DataRequest.description,
        logo: DataRequest.logo,
        location: DataRequest.location,
        rfc: DataRequest.rfc,
        slogan: DataRequest.slogan,
        mail: DataRequest.mail,
        telephone: DataRequest.telephone,
        website: DataRequest.website,
      },
      { where: { id: DataRequest.id } }
    );

    let DataResult = await Model.Empresa.findAll({
      where: { id: DataRequest.id },
    });

    try {
      var counter = 0;
      DataResult.forEach((element) => {
        DataResponse[counter] = DataResult[counter]["dataValues"];
        counter++;
      });
      return DataResponse[0];
    } catch (err) {
      console.log(err);
    }
  },

  //------------------------------------------
  invitaciones: async () => {
    /** */
    let Data = await Model.Invitacion.findAll({
      include: [
        {
          model: Model.Empresa,
        },
      ],
    });

    try {
      var counter = 0;
      Data.forEach((element) => {
        Data[counter]["dataValues"].Empresa =
          Data[counter]["dataValues"].Empresa["dataValues"];

        DataResponse[counter] = Data[counter]["dataValues"];
        console.log(Data[counter]["dataValues"].Empresa);
        counter++;
      });
      console.log("**********");
      console.log(DataResponse);
      console.log("*********");
      return DataResponse;
    } catch (err) {
      console.log(err);
    }
  },

  addInvitacion: async (DataRequest) => {
    let Data = await Model.Invitacion.create({
      name: DataRequest.name,
      expiration: DataRequest.expiration,
      empresaId: DataRequest.empresaId,
    });

    try {
      return Data;
    } catch (err) {
      console.log(err);
    }
  },
};

app.get("/", function(request, response) {
  console.log(process.env.APP_MESSAGE_SUCCESS);

  /** Example **/
  //Insert
  /*
  Model.Empresa.create({
    name: "rancho aguacate",
    description: "rancho",
    logo: "aguacate.png",
    location: "Comalcalco",
    rfc: "agua1234",
    slogan: "aguacate",
    mail: "aguacate@mail.com",
    telephone: "93312134545",
    website: "aguacate.mx",
  });
  /**/

  /*
  //time + 5hrs
  Model.Invitacion.create({
    name: "FI",
    expiration: "2020-07-22 11:45:00",
    empresaId: "1",
  });
  /**/

  //Update
  /*
  Model.Invitacion.update({ name: "FIU" }, { where: { id: 1 } });
  /**/

  //Select All
  /*
  var data = [];
  Model.Invitacion.findAll()
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
  /**/

  //SelectAllPersonalized
  /*
  var data = [];
  Model.Invitacion.findAll({ limit: 1, lock: true })
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
  /**/

  //SelectFind
  /*
  var data = [];
  Model.Invitacion.findAll({ where: { id: 1 } })
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
  /**/

  /*******************************TEST MODELS SEQUELIZE********************************/
  //Usuario
  //Falta implementar la encriptacion del password
  /*
  Model.Usuario.create({
    name: "edsonfer",
    email: "edson55_@hotmail.com",
    password: "123",
    code: "1991",
    photo: "profile.png",
    empresaId: "1",
  });
  /**/

  //TipoUsuario
  /*
  Model.TipoUsuario.create({
    name: "admin",
    description: "admin",
    badge: "admin-ico",
  });
  /**/

  //Privilegio
  /*
  Model.Privilegio.create({
    name: "moduleUsuario",
    description: "modulo de usuarios",
    badge: "users-ico",
  });
  /**/

  //RelTipoUsuarioPrivilegio
  /*
  Model.RelTipoUsuarioPrivilegio.create({
    description: "DEFAULT",
    tipousuarioId: "1",
    privilegioId: "1",
  });
  /**/

  //Perfil
  /*
  Model.Perfil.create({
    description: "DEFAULT",
    usuarioId: "1",
  });
  /**/

  //RelPerfilPrivilegio
  /*
  Model.RelPerfilPrivilegio.create({
    description: "DEFAULT",
    perfilId: "1",
    privilegioId: "1",
  });
  /**/

  /*******************************TEST MODELS SEQUELIZE********************************/

  console.log(process.env.APP_MESSAGE_SUCCESS);
});

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
