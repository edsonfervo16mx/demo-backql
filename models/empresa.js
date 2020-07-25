"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Empresa.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      logo: DataTypes.STRING,
      location: DataTypes.STRING,
      rfc: DataTypes.STRING,
      slogan: DataTypes.STRING,
      mail: DataTypes.STRING,
      telephone: DataTypes.STRING,
      website: DataTypes.STRING,
      situation: DataTypes.STRING,
      state: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Empresa",
    }
  );
  return Empresa;
};
