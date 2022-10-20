const { DataTypes } = require('sequelize')
const sequelize = require('./../config/sequelize')


const Models = sequelize.define('models',{
   id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
   },
   mark_id:{
      type:DataTypes.UUID
   },
   model_id:{
      type:DataTypes.INTEGER,
      allowNull:false
   },
   model_name:{
      type:DataTypes.STRING,
      allowNull:false
   }
})

module.exports = Models;