'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Want extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Want.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      Want.belongsTo(models.Item, {
        foreignKey: 'itemId',
      });
    }
  }
  Want.init({
    itemId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Want',
  });
  return Want;
};