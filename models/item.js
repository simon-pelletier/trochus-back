'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
    }
  }
  Item.init({
    name: DataTypes.STRING,
    estimation: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    condition: DataTypes.STRING,
    traded: { type: DataTypes.BOOLEAN, defaultValue: false },
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};