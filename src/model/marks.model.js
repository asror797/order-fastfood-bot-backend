const { DataTypes } = require('sequelize')
const sequelize = require('./../config/sequelize')


const Marks = sequelize.define('marks',{
   id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
   },
   mark_id:{
      type:DataTypes.INTEGER,
      allowNull:false
   },
   mark_name:{
      type:DataTypes.STRING,
      allowNull:false
   }
})

module.exports = Marks;