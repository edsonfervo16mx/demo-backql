"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Perfils", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
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
    await queryInterface.dropTable("Perfils");
  },
};
