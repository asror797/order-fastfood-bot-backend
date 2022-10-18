const userModel = require('../models/users.model')


module.exports = {
   GET:async(req,res) => {
      try {
         const users = await userModel.findAll()
         res.json(users)
      } catch (error) {
         console.log(error)
         res.sendStatus(error)
      }
   },
   GET_BY_USER:async(req,res) => {
      try {

         const { id } = req.body
         
         const user = await userModel.findAll({
            where:{
               telegramid:id
            }
         })

         console.log(user)


      } catch (error) {
        console.log(error) 
        res.sendStatus(500)
      }
   },
   NEW_USER:async(req,res) => {
      try {
         const { telegramid , fullname , phonenumber , location } = req.body

         const newUser = await userModel.create({
            fullname:fullname,
            telegramid:parseInt(telegramid),
            phonenumber:phonenumber,
            location:location
         })

         res.json(newUser)

      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }
}