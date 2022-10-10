const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    username: 'asror',
    password: 'aaa13579#',
    port: 5432,
    database: 'dostavka',
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize