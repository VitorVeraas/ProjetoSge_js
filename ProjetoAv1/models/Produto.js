const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria');

const Produto = sequelize.define('Produto', {
  produto_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  produto_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Produto.belongsTo(Categoria, { foreignKey: 'id_categoria' });

module.exports = Produto;