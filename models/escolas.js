const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

const Escola = sequelize.define('escola', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

exports.Escola = Escola;