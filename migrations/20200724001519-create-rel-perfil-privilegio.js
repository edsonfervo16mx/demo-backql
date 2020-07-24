"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RelPerfilPrivilegios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      perfilId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Perfils",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      privilegioId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Privilegios",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      situation: {
        type: Sequelize.STRING,
        defaultValue: "available",
      },
      state: {
        type: Sequelize.STRING,
        defaultValue: "active",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("RelPerfilPrivilegios");
  },
};
