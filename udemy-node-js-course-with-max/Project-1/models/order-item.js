const Sequalize = require('sequelize');

const sequalize = require('../util/database');

const orderItem = sequalize.define('orderItem', {
	id: {
		type: Sequalize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	quantity: Sequalize.INTEGER
});

module.exports = orderItem;
