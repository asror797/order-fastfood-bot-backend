const { DataTypes } = require('sequelize')
const sequelize = require('./../config/sequelize')

const Users = sequelize.define('users',{
   id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
   },
   telegramID:{
      type:DataTypes.INTEGER,
      allowNull:false
   },
   fullname:{
      type:DataTypes.STRING,

   },
   phonenumber:{
      type:DataTypes.STRING
   }

})

module.exports = Users;