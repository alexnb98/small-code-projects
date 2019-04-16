const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodeproject', 'root', 'alex0502', {
	dialect: 'mysql',
	host: 'localhost'
});

module.exports = sequelize;
