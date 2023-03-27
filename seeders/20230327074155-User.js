"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("User", [
      {
        email: "admin@localhost",
        pseudo: "admin",
        lastname: "admin",
        firstname: "admin",
        dateOfBirth: "2021-03-27",
        password: "1234",
        location: "{48.856613, 2.352222}",
        searchPerimeter: 0,
        activated: false,
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("User", null, {});
  },
};
