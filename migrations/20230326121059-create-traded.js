'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tradeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'items',
          key: 'id',
          as: 'itemId',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
          as: 'userId',
        },
      },
      transactionId: {
        type: Sequelize.INTEGER
      },
      accepted: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
      },
      confirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tradeds');
  }
};