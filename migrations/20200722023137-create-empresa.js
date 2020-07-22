'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      rfc: {
        type: Sequelize.STRING
      },
      slogan: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      situation: {
        type: Sequelize.STRING,
        defaultValue: 'normal'
      },
      state: {
        type: Sequelize.STRING,
        defaultValue: 'active'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Empresas');
  }
};