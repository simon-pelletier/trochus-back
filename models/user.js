'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Role, {
        foreignKey: 'roleId',
      });
      User.hasMany(models.Item, {
        foreignKey: 'userId',
      });
      User.hasMany(models.Want, {
        foreignKey: 'userId',
      });
    }
  }
  User.init({
    email: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    password: DataTypes.STRING,
    location: DataTypes.STRING,
    searchPerimeter: DataTypes.INTEGER,
    activated: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    city: DataTypes.STRING,
    confirmationToken: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};