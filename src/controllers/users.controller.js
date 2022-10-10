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
   NEW_USER:async(req,res) => {
      try {
         const { telegramid , fullname , phonenumber , location } = req.body

         const newUser = await userModel.create({
            fullname:fullname,
            telegramid:telegramid,
            phonenumber:phonenumber,
            location:location
         })

         res.json(newUser)

      } catch (error) {
         
      }
   }
}