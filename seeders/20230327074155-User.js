"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    

    await queryInterface.bulkInsert("users", [
      {
        email: "admin@admin.com",
        pseudo: "admin",
        lastname: "admin",
        firstname: "admin",
        dateOfBirth: "2021-03-27",
        password: "$2b$10$7lJqKBcNR2lKtarEyeLhR.3zoh6Y2eOuhen7Bhll48FGqBb4LTGly",
        location: "{48.856613, 2.352222}",
        searchPerimeter: 0,
        activated: true,
        address: "8 rue de la paix",
        postalCode: "75000",
        city: "Paris",
        confirmationToken: "admin",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "johndoe@localhost.com",
        pseudo: "johndoe",
        lastname: "doe",
        firstname: "john",
        dateOfBirth: "2021-03-27",
        password: "$2b$10$7lJqKBcNR2lKtarEyeLhR.3zoh6Y2eOuhen7Bhll48FGqBb4LTGly",
        location: "{48.856613, 2.352222}",
        searchPerimeter: 0,
        activated: false,
        address: "8 rue de la paix",
        postalCode: "75000",
        city: "Paris",
        confirmationToken: "johndoe",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "johndoe2@localhost.com",
        pseudo: "johndoe2",
        lastname: "doe2",
        firstname: "john2",
        dateOfBirth: "2021-03-27",
        password: "$2b$10$7lJqKBcNR2lKtarEyeLhR.3zoh6Y2eOuhen7Bhll48FGqBb4LTGly",
        location: "{48.856613, 2.352222}",
        searchPerimeter: 0,
        activated: false,
        address: "8 rue de la paix",
        postalCode: "75000",
        city: "Paris",
        confirmationToken: "johndoe2",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
