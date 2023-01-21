const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

/**
 * @typedef Professor
 * @property {string} nome.required
 * @property {string} password.required
 * @property {string} apelido.required
 * @property {boolean} email.required
 */

const Professor = sequelize.define('professor', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    apelido: {
		type: DataTypes.STRING,
		allowNull: false,
	},
    email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

exports.Professor = Professor; 