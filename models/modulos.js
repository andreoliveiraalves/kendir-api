const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

const Modulo = sequelize.define('modulo', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

exports.Modulo = Modulo