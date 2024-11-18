'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Atualizar a coluna 'createdAt' para ter um valor padrão
    await queryInterface.changeColumn('Products', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    // Atualizar a coluna 'updatedAt' para ter um valor padrão
    await queryInterface.changeColumn('Products', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Reverter a alteração na coluna 'createdAt'
    await queryInterface.changeColumn('Products', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: null,
    });

    // Reverter a alteração na coluna 'updatedAt'
    await queryInterface.changeColumn('Products', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: null,
    });
  }
};
