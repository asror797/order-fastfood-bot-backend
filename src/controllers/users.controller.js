const usersModel = require('./../model/users.model')

module.exports = {
   GET:async(_,res) => {

      try {
         const users = await usersModel.findAll()

         res.json(users)

      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   },
   INSERT:async(req,res) => {

      try {
         const { id , fullname , phonenumber } = req.body

         const isExist = await usersModel.findOne({
            where:{
               telegramID:id
            }
         })

         if(!isExist.telegramID) {
            const newUser = await usersModel.create({
               telegramID:id,
               fullname:fullname,
               phonenumber:phonenumber
            })
            res.json({
               status:200,
               id:newUser.telegramID
            })
         }else {
            res.json({status:"ok"})
         }
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   },
   GET_TEN_USER:async(req,res) => {
      try {
         const limit = 10
         const offset = (req.body.page - 1) * limit;

         const result = await usersModel.findAndCountAll({
            offset:offset,
            limit:limit
         })

         res.json(result)

      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }
}