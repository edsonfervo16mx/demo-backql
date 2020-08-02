"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RelPerfilPrivilegio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RelPerfilPrivilegio.belongsTo(models.Privilegio);
      RelPerfilPrivilegio.belongsTo(models.Perfil);
    }
  }
  RelPerfilPrivilegio.init(
    {
      description: DataTypes.STRING,
      perfilId: DataTypes.INTEGER,
      privilegioId: DataTypes.INTEGER,
      situation: DataTypes.STRING,
      state: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RelPerfilPrivilegio",
    }
  );
  return RelPerfilPrivilegio;
};
