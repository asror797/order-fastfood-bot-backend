const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")


const Users = sequelize.define('users',{
   id: {
      type: DataTypes.INTEGER,
      autoincrement: true,
      primaryKey: true,
   },
   telegramid:{
      type:DataTypes.INTEGER,
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