"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Usuario.belongsTo(models.Empresa, { foreignKey: "empresaId" });
      Usuario.belongsTo(models.Empresa);
      Usuario.belongsTo(models.TipoUsuario);
      Usuario.hasMany(models.Perfil, {
        foreignKey: "usuarioId",
        as: "Perfil",
      });
    }
  }
  Usuario.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      code: DataTypes.INTEGER,
      photo: DataTypes.STRING,
      empresaId: DataTypes.INTEGER,
      tipoUsuarioId: DataTypes.INTEGER,
      situation: DataTypes.STRING,
      state: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
