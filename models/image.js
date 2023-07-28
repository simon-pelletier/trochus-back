'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsTo(models.Item, {
        foreignKey: "itemId",
        onDelete: "CASCADE",
      });
    }
  }
  Image.init({
    itemId: DataTypes.INTEGER,
    filename: DataTypes.STRING,
    fileType: DataTypes.STRING,
    fileSize: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'images',
    modelName: 'Image',
  });
  return Image;
};