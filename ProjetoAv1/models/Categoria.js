const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
    id_categoria: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome_categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  module.exports = Categoria;