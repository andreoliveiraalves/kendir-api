const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

/**
 * @typedef Aluno
 * @property {string} nome.required
 * @property {string} apelido.required
 * @property {string} email.required
 */

const Aluno = sequelize.define('aluno', {
    nome: {
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

exports.Aluno = Aluno;
