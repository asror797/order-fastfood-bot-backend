const { DataTypes } = require('sequelize')
const sequelize = require('./../config/sequelize');
const Marks = require('./marks.model');


const Cars = sequelize.define('cars',{
   id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4,
   },
   mark_id:{
      type:DataTypes.UUID,
      references:{
         model:Marks,
         key:"id"
      }
   },
   title:{
      type:DataTypes.STRING,
      allowNull:false,
   },
   year:{
      type:DataTypes.INTEGER,
      allowNull:false
   },
   price:{
      type:DataTypes.BIGINT
   }
})

module.exports = Cars;