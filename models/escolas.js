const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

/**
 * @typedef Escola
 * @property {string} nome.required
 */

const Escola = sequelize.define('escola', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

exports.Escola = Escola;