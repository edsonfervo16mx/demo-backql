var Model = require("../models/index");
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
};

module.exports = root;
