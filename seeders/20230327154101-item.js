'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("items", [
      {
        name: "Bouteille de vin",
        description: "Bouteille de vin rouge",
        estimation: 10,
        condition: "bon",
        traded: false,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sac à main",
        description: "Sac à main en cuir",
        estimation: 20,
        condition: "bon",
        traded: false,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Manette de jeu",
        description: "Manette de jeu pour console",
        estimation: 30,
        condition: "bon",
        traded: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tondeuse à gazon",
        description: "Tondeuse à gazon électrique",
        estimation: 40,
        condition: "bon",
        traded: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lunettes de soleil",
        description: "Lunettes de soleil de marque",
        estimation: 50,
        condition: "bon",
        traded: false,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("items", null, {});
  }
};
