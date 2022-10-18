const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")


const Users = sequelize.define('users',{
   telegramid:{
      type:DataTypes.BIGINT,
      allowNull:false
   },
   fullname:{
      type:DataTypes.STRING,
      allowNull:false
   },
   phonenumber:{
      type:DataTypes.STRING,
   },
   location:{
      type:DataTypes.STRING
   }
})

module.exports = Users