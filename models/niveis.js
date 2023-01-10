const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

const Nivel = sequelize.define('nivel', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recorde: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
})

exports.Nivel = Nivel