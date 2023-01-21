const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

/**
 * @typedef Desafio
 * @property {string} nome.required
 * @property {string} descricao.required
 * @property {string} tipo.required
 * @property {boolean} status.required
 * @property {float} objetivo.required
 * @property {float} progresso.required
 */

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
    objetivo: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    progresso: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

})

exports.Desafio = Desafio