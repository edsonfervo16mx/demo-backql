var Model = require("../models/index");
const { sign } = require("jsonwebtoken");
var randtoken = require("rand-token");
var refreshTokens = {};
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

    let DataResult = await Model.Empresa.findAll({
      where: { id: Data.id },
    });

    try {
      var counter = 0;
      DataResult.forEach((element) => {
        DataResponse[counter] = DataResult[counter]["dataValues"];
        counter++;
      });
      console.log(DataResponse);
      return DataResponse[0];
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
        situation: DataRequest.situation,
        state: DataRequest.state,
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
        //console.log(Data[counter]["dataValues"].Empresa);
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

    let DataResult = await Model.Invitacion.findAll({
      where: { id: Data.id },
      include: [
        {
          model: Model.Empresa,
        },
      ],
    });

    try {
      var counter = 0;
      //console.log(Data);
      console.log(Data.id);
      DataResult.forEach((element) => {
        DataResult[counter]["dataValues"].Empresa =
          DataResult[counter]["dataValues"].Empresa["dataValues"];

        DataResponse[counter] = DataResult[counter]["dataValues"];
        //console.log(DataResult[counter]["dataValues"].Empresa);
        counter++;
      });
      console.log("**********");
      console.log(DataResponse);
      console.log("*********");
      return DataResponse[0];
    } catch (err) {
      console.log(err);
    }
  },

  updateInvitacion: async (DataRequest) => {
    let Data = await Model.Invitacion.update(
      {
        name: DataRequest.name,
        expiration: DataRequest.expiration,
        empresaId: DataRequest.empresaId,
        situation: DataRequest.situation,
        state: DataRequest.state,
      },
      { where: { id: DataRequest.id } }
    );

    let DataResult = await Model.Invitacion.findAll({
      where: { id: DataRequest.id },
      include: [
        {
          model: Model.Empresa,
        },
      ],
    });

    try {
      var counter = 0;
      Data.forEach((element) => {
        DataResult[counter]["dataValues"].Empresa =
          DataResult[counter]["dataValues"].Empresa["dataValues"];

        DataResponse[counter] = DataResult[counter]["dataValues"];
        //console.log(DataResult[counter]["dataValues"].Empresa);
        counter++;
      });
      console.log("**********");
      console.log(DataResponse);
      console.log("*********");
      return DataResponse[0];
    } catch (err) {
      console.log(err);
    }
  },
  //------------------------------------------------------
  tipousuarios: async () => {
    let Data = await Model.TipoUsuario.findAll();
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

  addTipoUsuario: async (DataRequest) => {
    let Data = await Model.TipoUsuario.create({
      name: DataRequest.name,
      description: DataRequest.description,
      badge: DataRequest.badge,
    });

    let DataResult = await Model.TipoUsuario.findAll({
      where: { id: Data.id },
    });

    try {
      var counter = 0;
      DataResult.forEach((element) => {
        DataResponse[counter] = DataResult[counter]["dataValues"];
        counter++;
      });
      console.log(DataResponse);
      return DataResponse[0];
    } catch (err) {
      console.log(err);
    }
  },

  updateTipoUsuario: async (DataRequest) => {
    let Data = await Model.TipoUsuario.update(
      {
        name: DataRequest.name,
        description: DataRequest.description,
        badge: DataRequest.badge,
        situation: DataRequest.situation,
        state: DataRequest.state,
      },
      { where: { id: DataRequest.id } }
    );

    let DataResult = await Model.TipoUsuario.findAll({
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

  //------------------------------------------------------
  privilegios: async () => {
    let Data = await Model.Privilegio.findAll();
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

  addPrivilegio: async (DataRequest) => {
    let Data = await Model.Privilegio.create({
      name: DataRequest.name,
      description: DataRequest.description,
      badge: DataRequest.badge,
    });

    let DataResult = await Model.Privilegio.findAll({
      where: { id: Data.id },
    });

    try {
      var counter = 0;
      DataResult.forEach((element) => {
        DataResponse[counter] = DataResult[counter]["dataValues"];
        counter++;
      });
      console.log(DataResponse);
      return DataResponse[0];
    } catch (err) {
      console.log(err);
    }
  },

  updatePrivilegio: async (DataRequest) => {
    let Data = await Model.Privilegio.update(
      {
        name: DataRequest.name,
        description: DataRequest.description,
        badge: DataRequest.badge,
        situation: DataRequest.situation,
        state: DataRequest.state,
      },
      { where: { id: DataRequest.id } }
    );

    let DataResult = await Model.Privilegio.findAll({
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

  //------------------------------------------------------
  usuarios: async () => {
    let Data = await Model.Usuario.findAll({
      include: [
        {
          model: Model.Empresa,
        },
        {
          model: Model.TipoUsuario,
        },
      ],
    });
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

  addUsuario: async (DataRequest) => {
    let Data = await Model.Usuario.create({
      name: DataRequest.name,
      email: DataRequest.email,
      password: DataRequest.password,
      code: DataRequest.code,
      photo: DataRequest.photo,
      empresaId: DataRequest.empresaId,
      tipoUsuarioId: DataRequest.tipoUsuarioId,
    });

    let DataResult = await Model.Usuario.findAll({
      where: { id: Data.id },
      include: [
        {
          model: Model.Empresa,
        },
        {
          model: Model.TipoUsuario,
        },
      ],
    });

    try {
      var counter = 0;
      console.log(Data.id);
      DataResult.forEach((element) => {
        DataResult[counter]["dataValues"].Empresa =
          DataResult[counter]["dataValues"].Empresa["dataValues"];
        DataResult[counter]["dataValues"].TipoUsuario =
          DataResult[counter]["dataValues"].TipoUsuario["dataValues"];

        DataResponse[counter] = DataResult[counter]["dataValues"];
        //console.log(DataResult[counter]["dataValues"].Empresa);
        counter++;
      });
      console.log("**********");
      console.log(DataResponse);
      console.log("*********");
      return DataResponse[0];
      /**/
    } catch (err) {
      console.log(err);
    }
  },

  updateUsuario: async (DataRequest) => {
    let Data = await Model.Usuario.update(
      {
        name: DataRequest.name,
        email: DataRequest.email,
        password: DataRequest.password,
        code: DataRequest.code,
        photo: DataRequest.photo,
        empresaId: DataRequest.empresaId,
        tipoUsuarioId: DataRequest.tipoUsuarioId,
        situation: DataRequest.situation,
        state: DataRequest.state,
      },
      { where: { id: DataRequest.id } }
    );

    let DataResult = await Model.Usuario.findAll({
      where: { id: DataRequest.id },
      include: [
        {
          model: Model.Empresa,
        },
        {
          model: Model.TipoUsuario,
        },
      ],
    });

    try {
      var counter = 0;
      console.log(Data.id);
      DataResult.forEach((element) => {
        DataResult[counter]["dataValues"].Empresa =
          DataResult[counter]["dataValues"].Empresa["dataValues"];
        DataResult[counter]["dataValues"].TipoUsuario =
          DataResult[counter]["dataValues"].TipoUsuario["dataValues"];

        DataResponse[counter] = DataResult[counter]["dataValues"];
        //console.log(DataResult[counter]["dataValues"].Empresa);
        counter++;
      });
      console.log("**********");
      console.log(DataResponse);
      console.log("*********");
      return DataResponse[0];
    } catch (err) {
      console.log(err);
    }
  },

  //----------------------------------------------------------------

  perfiles: async () => {
    let Data = await Model.Perfil.findAll({
      include: [
        {
          model: Model.Usuario,
          include: [
            {
              model: Model.TipoUsuario,
            },
            {
              model: Model.Empresa,
            },
          ],
        },
      ],
    });

    try {
      var counter = 0;
      Data.forEach((element) => {
        Data[counter]["dataValues"].Usuario =
          Data[counter]["dataValues"].Usuario["dataValues"];

        DataResponse[counter] = Data[counter]["dataValues"];
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

  addPerfil: async (DataRequest) => {
    let Data = await Model.Perfil.create({
      description: DataRequest.description,
      usuarioId: DataRequest.usuarioId,
    });

    let DataResult = await Model.Perfil.findAll({
      where: { id: Data.id },
      include: [
        {
          model: Model.Usuario,
          include: [
            {
              model: Model.TipoUsuario,
            },
            {
              model: Model.Empresa,
            },
          ],
        },
      ],
    });

    try {
      var counter = 0;
      DataResult.forEach((element) => {
        DataResult[counter]["dataValues"].Usuario =
          DataResult[counter]["dataValues"].Usuario["dataValues"];

        DataResponse[counter] = DataResult[counter]["dataValues"];
        counter++;
      });
      console.log("**********");
      console.log(DataResponse);
      console.log("*********");
      return DataResponse[0];
    } catch (err) {
      console.log(err);
    }
  },

  updatePerfil: async (DataRequest) => {
    let Data = await Model.Perfil.update(
      {
        description: DataRequest.description,
        usuarioId: DataRequest.usuarioId,
        situation: DataRequest.situation,
        state: DataRequest.state,
      },
      { where: { id: DataRequest.id } }
    );

    let DataResult = await Model.Perfil.findAll({
      where: { id: DataRequest.id },
      include: [
        {
          model: Model.Usuario,
          include: [
            {
              model: Model.TipoUsuario,
            },
            {
              model: Model.Empresa,
            },
          ],
        },
      ],
    });

    try {
      var counter = 0;
      DataResult.forEach((element) => {
        DataResult[counter]["dataValues"].Usuario =
          DataResult[counter]["dataValues"].Usuario["dataValues"];

        DataResponse[counter] = DataResult[counter]["dataValues"];
        counter++;
      });
      console.log("**********");
      console.log(DataResponse);
      console.log("*********");
      return DataResponse[0];
    } catch (err) {
      console.log(err);
    }
  },

  //----------------------------------------------------------------
  //Agregar Usuario - empresa
  reltipousuarioprivilegios: async () => {
    let Data = await Model.RelTipoUsuarioPrivilegio.findAll({
      include: [
        {
          model: Model.Privilegio,
        },
        {
          model: Model.TipoUsuario,
        },
      ],
    });

    try {
      var counter = 0;
      Data.forEach((element) => {
        Data[counter]["dataValues"].Privilegio =
          Data[counter]["dataValues"].Privilegio["dataValues"];
        Data[counter]["dataValues"].TipoUsuario =
          Data[counter]["dataValues"].TipoUsuario["dataValues"];

        DataResponse[counter] = Data[counter]["dataValues"];
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

  addRelTipoUsuarioPrivilegio: async (DataRequest) => {
    let Data = await Model.RelTipoUsuarioPrivilegio.create({
      description: DataRequest.description,
      tipoUsuarioId: DataRequest.tipoUsuarioId,
      privilegioId: DataRequest.privilegioId,
    });

    let DataResult = await Model.RelTipoUsuarioPrivilegio.findAll({
      where: { id: Data.id },
      include: [
        {
          model: Model.Privilegio,
        },
        {
          model: Model.TipoUsuario,
        },
      ],
    });
    try {
      var counter = 0;
      console.log(Data.id);
      DataResult.forEach((element) => {
        DataResult[counter]["dataValues"].Privilegio =
          DataResult[counter]["dataValues"].Privilegio["dataValues"];
        DataResult[counter]["dataValues"].TipoUsuario =
          DataResult[counter]["dataValues"].TipoUsuario["dataValues"];

        DataResponse[counter] = DataResult[counter]["dataValues"];
        counter++;
      });
      console.log("**********");
      console.log(DataResponse);
      console.log("*********");
      return DataResponse[0];
    } catch (err) {
      console.log(err);
    }
  },

  updateRelTipoUsuarioPrivilegio: async (DataRequest) => {
    let Data = await Model.RelTipoUsuarioPrivilegio.update(
      {
        description: DataRequest.description,
        tipoUsuarioId: DataRequest.tipoUsuarioId,
        privilegioId: DataRequest.privilegioId,
        situation: DataRequest.situation,
        state: DataRequest.state,
      },
      { where: { id: DataRequest.id } }
    );

    let DataResult = await Model.RelTipoUsuarioPrivilegio.findAll({
      where: { id: DataRequest.id },
      include: [
        {
          model: Model.Privilegio,
        },
        {
          model: Model.TipoUsuario,
        },
      ],
    });

    try {
      var counter = 0;
      DataResult.forEach((element) => {
        DataResult[counter]["dataValues"].Privilegio =
          DataResult[counter]["dataValues"].Privilegio["dataValues"];
        DataResult[counter]["dataValues"].TipoUsuario =
          DataResult[counter]["dataValues"].TipoUsuario["dataValues"];

        DataResponse[counter] = DataResult[counter]["dataValues"];
        counter++;
      });
      console.log("**********");
      console.log(DataResponse);
      console.log("*********");
      return DataResponse[0];
    } catch (err) {
      console.log(err);
    }
  },
  //-----------------------------------------------------
  relperfilprivilegios: async () => {
    let Data = await Model.RelPerfilPrivilegio.findAll({
      include: [
        {
          model: Model.Perfil,
        },
        {
          model: Model.Privilegio,
        },
      ],
    });

    try {
      var counter = 0;
      Data.forEach((element) => {
        Data[counter]["dataValues"].Privilegio =
          Data[counter]["dataValues"].Privilegio["dataValues"];
        Data[counter]["dataValues"].Perfil =
          Data[counter]["dataValues"].Perfil["dataValues"];

        DataResponse[counter] = Data[counter]["dataValues"];
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

  addRelPerfilPrivilegio: async (DataRequest) => {
    let Data = await Model.RelPerfilPrivilegio.create({
      description: DataRequest.description,
      perfilId: DataRequest.perfilId,
      privilegioId: DataRequest.privilegioId,
    });

    let DataResult = await Model.RelPerfilPrivilegio.findAll({
      include: [
        {
          model: Model.Perfil,
        },
        {
          model: Model.Privilegio,
        },
      ],
    });

    try {
      var counter = 0;
      console.log(Data.id);
      DataResult.forEach((element) => {
        DataResult[counter]["dataValues"].Privilegio =
          DataResult[counter]["dataValues"].Privilegio["dataValues"];
        DataResult[counter]["dataValues"].Perfil =
          DataResult[counter]["dataValues"].Perfil["dataValues"];

        DataResponse[counter] = DataResult[counter]["dataValues"];
        counter++;
      });
      console.log("**********");
      console.log(DataResponse);
      console.log("*********");
      return DataResponse[0];
    } catch (err) {
      console.log(err);
    }
  },
  updateRelPerfilPrivilegio: async (DataRequest) => {
    let Data = await Model.RelPerfilPrivilegio.update(
      {
        escription: DataRequest.description,
        perfilId: DataRequest.perfilId,
        privilegioId: DataRequest.privilegioId,
        situation: DataRequest.situation,
        state: DataRequest.state,
      },
      { where: { id: DataRequest.id } }
    );

    let DataResult = await Model.RelPerfilPrivilegio.findAll({
      where: { id: DataRequest.id },
      include: [
        {
          model: Model.Perfil,
        },
        {
          model: Model.Privilegio,
        },
      ],
    });

    try {
      var counter = 0;
      DataResult.forEach((element) => {
        DataResult[counter]["dataValues"].Privilegio =
          DataResult[counter]["dataValues"].Privilegio["dataValues"];
        DataResult[counter]["dataValues"].Perfil =
          DataResult[counter]["dataValues"].Perfil["dataValues"];

        DataResponse[counter] = DataResult[counter]["dataValues"];
        counter++;
      });
      console.log("**********");
      console.log(DataResponse);
      console.log("*********");
      return DataResponse[0];
    } catch (err) {
      console.log(err);
    }
  },
  //-----------------------------------
  //--------------AUTH-----------------
  //-----------------------------------
  /**/

  loginAuth: async (DataRequest) => {
    console.log("loginAuth...");
    console.log(DataRequest);
    console.log(DataRequest.email);
    console.log(DataRequest.password);
    if (DataRequest.email != null && DataRequest.password != null) {
      let Data = await Model.Usuario.findAll({
        where: { email: DataRequest.email, password: DataRequest.password },
        include: [
          {
            model: Model.Empresa,
          },
          {
            model: Model.TipoUsuario,
          },
        ],
      });
      try {
        var counter = 0;
        var uidToken = randtoken.uid(256);
        let resultAuth = {};
        Data.forEach((element) => {
          DataResponse[counter] = Data[counter]["dataValues"];
          counter++;
        });
        //

        const jsonToken = sign(
          {
            res: [
              DataResponse[0].email,
              DataResponse[0].password,
              DataResponse[0].code,
            ],
          },
          "fer1024",
          {
            expiresIn: "1h",
          }
        );
        //

        DataResponse[0].token = jsonToken;
        refreshTokens[uidToken] = DataResponse[0].email + DataResponse[0].code;
        DataResponse[0].refreshToken = uidToken;
        DataResponse[0].message = "SUCCESS";
        resultAuth = DataResponse;
        console.log(resultAuth);
        return resultAuth[0];
        //return Response.json(resultAuth);
      } catch (err) {
        console.log(err);
        return [];
      }
    } else {
      console.log("Acceso denegado");
      return [];
    }
  },
  /** */
  //-----------------------------------
  //--------------AUTH-----------------
  //-----------------------------------
};

module.exports = root;
