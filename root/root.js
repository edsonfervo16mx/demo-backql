var Model = require("../models/index");
const { sign } = require("jsonwebtoken");
var randtoken = require("rand-token");
var refreshTokensArray = {};
var DataResponse = [];
var CryptoJS = require("crypto-js");
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
    //Encript
    let passwordCrypto = CryptoJS.AES.encrypt(
      DataRequest.password,
      "161616"
    ).toString();
    //
    let Data = await Model.Usuario.create({
      name: DataRequest.name,
      email: DataRequest.email,
      password: passwordCrypto,
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
    if (DataRequest.password) {
      //Encript
      /*
      let passwordCrypto = CryptoJS.AES.encrypt(
        DataRequest.password,
        "161616"
      ).toString();
			DataRequest.password = passwordCrypto;
			*/
      //
      let passwordCrypto = CryptoJS.AES.decrypt(DataRequest.password, "161616");
      let passwordString = passwordCrypto.toString(CryptoJS.enc.Utf8);
      DataRequest.password = passwordString;
    }

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
          include: [
            {
              model: Model.Usuario,
              include: [
                {
                  model: Model.Empresa,
                },
              ],
            },
          ],
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
      where: { id: Data.id },
      include: [
        {
          model: Model.Perfil,
          include: [
            {
              model: Model.Usuario,
              include: [
                {
                  model: Model.Empresa,
                },
              ],
            },
          ],
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
          include: [
            {
              model: Model.Usuario,
              include: [
                {
                  model: Model.Empresa,
                },
              ],
            },
          ],
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

    /*
    //Encript
    let passwordCrypto = CryptoJS.AES.encrypt(
      DataRequest.password,
      "161616"
    ).toString();
    //
    console.log("+++++++++++++++++++++++++++++++++++++++");
    console.log(DataRequest.password);
    console.log("+++++++++++++++++++++++++++++++++++++++");
    console.log(passwordCrypto);
    console.log("+++++++++++++++++++++++++++++++++++++++");
		//
		*/
    let passwordCrypto = CryptoJS.AES.decrypt(DataRequest.password, "161616");
    let passwordString = passwordCrypto.toString(CryptoJS.enc.Utf8);

    if (DataRequest.email != null && DataRequest.password != null) {
      let preData = await Model.Usuario.findAll({
        where: { email: DataRequest.email },
        include: [
          {
            model: Model.Empresa,
          },
          {
            model: Model.TipoUsuario,
          },
        ],
      });
      /*
      console.log("+++++++++++++++++++++++++++++++++");
      console.log(preData);
      console.log("+++++++++++++++++++++++++++++++++");
      console.log(preData[0]["dataValues"].password);
			console.log("+++++++++++++++++++++++++++++++++");
			*/
      let passwordBDCrypto = CryptoJS.AES.decrypt(
        preData[0]["dataValues"].password,
        "161616"
      );
      let passwordBDString = passwordBDCrypto.toString(CryptoJS.enc.Utf8);

      if (
        DataRequest.email == preData[0]["dataValues"].email &&
        passwordString == passwordBDString
      ) {
        console.log("#################################");
        console.log("ES IGUAL");
        console.log(DataRequest.email);
        console.log(preData[0]["dataValues"].email);
        console.log(passwordString);
        console.log(passwordBDString);
        console.log("#################################");
        let Data = await Model.Usuario.findAll({
          where: {
            email: DataRequest.email,
            code: preData[0]["dataValues"].code,
          },
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
          //console.log(Data);
          if (Data[0] == null) {
            console.log("Credenciales invalidas");
            return [];
          } else {
            console.log("Credenciales validas");
            var uidToken = randtoken.uid(256);
            let resultAuth = {};
            var counter = 0;
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
            refreshTokensArray[uidToken] =
              DataResponse[0].email + DataResponse[0].code;
            DataResponse[0].refreshToken = uidToken;
            DataResponse[0].message = "SUCCESS";
            resultAuth = DataResponse;
            console.log(resultAuth);
            return resultAuth[0];
          }
        } catch (err) {
          console.log(err);
          return [];
        }
      } else {
        console.log("#################################");
        console.log("NO ES IGUAL");
        console.log(DataRequest.email);
        console.log(preData[0]["dataValues"].email);
        console.log(passwordString);
        console.log(passwordBDString);
        console.log("#################################");
        console.log("Acceso denegado");
        return [];
      }
    } else {
      console.log("Acceso denegado");
      return [];
    }
  },
  /** */
  refreshAuth: async (DataRequest) => {
    console.log("refreshAuth...");
    console.log(DataRequest.email);
    console.log(DataRequest.code);
    console.log(DataRequest.refreshToken);
    let resultAuth = {};
    let Data = await Model.Usuario.findAll({
      where: { email: DataRequest.email, code: DataRequest.code },
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
      if (Data[0] == null) {
        console.log("Credenciales invalidas");
        return [];
      } else {
        console.log("Credenciales validas");
        var counter = 0;
        Data.forEach((element) => {
          DataResponse[counter] = Data[counter]["dataValues"];
          counter++;
        });

        if (
          DataRequest.refreshToken in refreshTokensArray &&
          refreshTokensArray[DataRequest.refreshToken] ==
            DataRequest.email + DataRequest.code
        ) {
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
          console.log("SUCCESS Auth");
          DataResponse[0].token = jsonToken;
          DataResponse[0].message = "SUCCESS";
          resultAuth = DataResponse;
          console.log(resultAuth);
          return resultAuth[0];
        } else {
          console.log("FAIL Auth");
          return [];
        }
      }
    } catch (err) {
      console.log(err);
    }
  },

  rejectAuth: async (DataRequest) => {
    console.log("rejectAuth...");
    //console.log(DataRequest.refreshToken);
    let resultAuth = {};
    if (DataRequest.refreshToken in refreshTokensArray) {
      delete refreshTokensArray[DataRequest.refreshToken];
      console.log("Removed");
    }

    return resultAuth;
  },
  //-----------------------------------
  //--------------AUTH-----------------
  //-----------------------------------
};

module.exports = root;
