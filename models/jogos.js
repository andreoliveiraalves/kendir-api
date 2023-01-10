const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection

const Jogo = sequelize.define('jogo', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

exports.Jogo = Jogo