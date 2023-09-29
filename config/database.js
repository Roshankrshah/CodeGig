const { Sequelize } = require('sequelize');

module.exports =  new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
  dialect: 'mysql',
  host: 'localhost',
}); 

