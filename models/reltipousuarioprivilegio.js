"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RelTipoUsuarioPrivilegio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RelTipoUsuarioPrivilegio.belongsTo(models.TipoUsuario, {
        foreignKey: "tipousuarioId",
      });
      RelTipoUsuarioPrivilegio.belongsTo(models.Privilegio, {
        foreignKey: "privilegioId",
      });
    }
  }
  RelTipoUsuarioPrivilegio.init(
    {
      description: DataTypes.STRING,
      tipousuarioId: DataTypes.INTEGER,
      privilegioId: DataTypes.INTEGER,
      situation: DataTypes.STRING,
      state: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RelTipoUsuarioPrivilegio",
    }
  );
  return RelTipoUsuarioPrivilegio;
};
