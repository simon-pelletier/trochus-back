'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        label: 'Electronique',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label: 'Vêtements',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label: 'Livres',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label: 'Papeterie',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label: 'Jouets',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label: 'Outils',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        label: 'Autre',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
