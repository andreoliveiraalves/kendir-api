const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

/**
 * @typedef Nivel
 * @property {string} nome.required
 * @property {float} recorde.required
 */

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