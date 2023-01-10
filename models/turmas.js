const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

const Turma = sequelize.define('turma', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

exports.Turma = Turma