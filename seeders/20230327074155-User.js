"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        email: "admin@localhost",
        pseudo: "admin",
        lastname: "admin",
        firstname: "admin",
        dateOfBirth: "2021-03-27",
        password: "1234",
        location: "{48.856613, 2.352222}",
        searchPerimeter: 0,
        activated: true,
        address: "8 rue de la paix",
        postalCode: "75000",
        city: "Paris",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "johndoe@localhost",
        pseudo: "johndoe",
        lastname: "doe",
        firstname: "john",
        dateOfBirth: "2021-03-27",
        password: "1234",
        location: "{48.856613, 2.352222}",
        searchPerimeter: 0,
        activated: false,
        address: "8 rue de la paix",
        postalCode: "75000",
        city: "Paris",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "johndoe2@localhost",
        pseudo: "johndoe2",
        lastname: "doe2",
        firstname: "john2",
        dateOfBirth: "2021-03-27",
        password: "1234",
        location: "{48.856613, 2.352222}",
        searchPerimeter: 0,
        activated: false,
        address: "8 rue de la paix",
        postalCode: "75000",
        city: "Paris",
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
