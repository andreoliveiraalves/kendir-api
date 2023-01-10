const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

const Professor = sequelize.define('professor', {
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

exports.Professor = Professor; 