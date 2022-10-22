const modelsModel = require('./../model/models.model')


module.exports = {
   GET:async(_,res) => {
      try {
         res.json(await modelsModel.findAll())
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   },
   INSERT:async(req,res) => {
      try {
         const {
            mark_id,
            model_name
         } = req.body

         const model_id = await modelsModel.count()

         const addedModel = await modelsModel.create({
            mark_id:mark_id,
            model_name:model_name,
            model_id:model_id
         })


         res.json(addedModel)
         
      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }
}