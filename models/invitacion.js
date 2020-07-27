"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Invitacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Invitacion.belongsTo(models.Empresa, { foreignKey: "empresaId" });
      Invitacion.belongsTo(models.Empresa);
      /*
      Invitacion.hasMany(models.Empresa, {
        foreignKey: "empresaId",
        as: "Empresas",
      });
      */
    }
  }
  Invitacion.init(
    {
      name: DataTypes.STRING,
      expiration: DataTypes.DATE,
      empresaId: DataTypes.INTEGER,
      situation: DataTypes.STRING,
      state: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Invitacion",
    }
  );
  return Invitacion;
};
