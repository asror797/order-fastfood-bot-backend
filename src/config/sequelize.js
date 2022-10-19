const { Sequelize } = require('sequelize')


const sequelize = new Sequelize({
   username:"asror",
   password:"aaa13579A#",
   port:5432,
   database:"avtoelon",
   host:"localhost",
   dialect:"postgres"
})

module.exports = sequelize;