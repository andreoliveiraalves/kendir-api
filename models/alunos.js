const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection
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
