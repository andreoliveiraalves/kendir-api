const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/sequelize').sequelizeConnection
const Admin = sequelize.define('admin', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

exports.Admin = Admin;