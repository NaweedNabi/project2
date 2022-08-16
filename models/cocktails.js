const Sequelize = require("sequelizer");
const db = require("../config/database");

module.exports = (sequelize, Sequelize) => {
const users = db.define("user", {
  email: {
    type: Sequelize.STRING
  }
})
    return Users
}

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

class Cocktail extends Model {}

Cocktail.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAlcoholic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipe: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'cocktail',
  }
);

module.exports = Cocktail;