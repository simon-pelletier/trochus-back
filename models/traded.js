'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Traded extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Traded.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      Traded.belongsTo(models.Item, {
        foreignKey: 'itemId',
      });
    }
  }
  Traded.init({
    itemId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
    accepted: DataTypes.BOOLEAN,
    confirmed: DataTypes.BOOLEAN,
  }, {
    sequelize,
    tableName: 'tradeds',
    modelName: 'Traded',
  });
  return Traded;
};