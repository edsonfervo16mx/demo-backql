require("dotenv").config();
var express = require("express");
var app = express();

var Model = require("./models/index");

app.get("/", function(request, response) {
  console.log(process.env.APP_MESSAGE_SUCCESS);

  /** Example **/
  //Insert
  /*
    Model.Empresa.create({ name: 'rancho aguacate', description: 'rancho', logo: 'aguacate.png', location: 'Comalcalco', rfc: 'agua1234', slogan: 'aguacate', mail: 'aguacate@mail.com', telephone: '93312134545', website: 'aguacate.mx' })
    /**/

  /*
    //time + 5hrs
    Model.Invitacion.create({ name: 'FI', expiration: '2020-07-22 11:45:00', empresaId: '1' })
    /**/

  //Update
  /*
    Model.Invitacion.update({ name: 'FIU' }, { where: { id: 3 } })
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
  */

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
console.log("Backql en http://localhost:" + process.env.APP_PORT);
app.listen(process.env.APP_PORT);
