"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Privilegio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Privilegio.hasMany(models.RelTipoUsuarioPrivilegio, {
        foreignKey: "privilegioId",
        as: "Privilegios",
      });
      Privilegio.hasMany(models.RelPerfilPrivilegio, {
        foreignKey: "privilegioId",
        as: "RelPerfilPrivilegios",
      });
    }
  }
  Privilegio.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      badge: DataTypes.STRING,
      situation: DataTypes.STRING,
      state: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Privilegio",
    }
  );
  return Privilegio;
};
