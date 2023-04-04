'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("items", [
      {
        name: "Bouteille de vin",
        description: "Bouteille de vin rouge",
        estimation: 10,
        condition: "new",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sac à main",
        description: "Sac à main en cuir",
        estimation: 20,
        condition: "very_good",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Manette de jeu",
        description: "Manette de jeu pour console en usb. Compatible avec la plupart des consoles mais aussi les pcs & mac.",
        estimation: 30,
        condition: "good",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Briquet",
        description: "Parfait pour faire du feu avec une seule main",
        estimation: 5,
        condition: "average",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tondeuse à gazon",
        description: "Tondeuse à gazon électrique. Idéal pour les petits jardins. La batterie n'est pas fournie mais elle est compatible avec toutes les batteries de la marque.",
        estimation: 40,
        condition: "bad",
        traded: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tasse à café",
        description: "Pour un café bien chaud",
        estimation: 10,
        condition: "bad",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lunettes de soleil",
        description: "Lunettes de soleil de marque",
        estimation: 50,
        condition: "average",
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
