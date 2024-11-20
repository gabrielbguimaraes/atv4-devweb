'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Adiciona a coluna 'contact' na tabela 'Suppliers'
    await queryInterface.addColumn('Suppliers', 'contact', {
      type: Sequelize.STRING,  // Define o tipo da coluna como STRING
      allowNull: true,         // Se true, essa coluna pode ser nula, caso contrário, será obrigatória
    });
  },

  async down (queryInterface, Sequelize) {
    // Remove a coluna 'contact' da tabela 'Suppliers'
    await queryInterface.removeColumn('Suppliers', 'contact');
  }
};
