const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection
const Desafio = sequelize.define('desafio', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
})

exports.Desafio = Desafio