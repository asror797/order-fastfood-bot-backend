const marksModel = require('./../model/marks.model')


module.exports = {
   GET:async(_,res) => {
      try {
         const marks = await marksModel.findAll()
         res.json(marks)

      } catch (error) {
         console.log(error)
         res.json("ok")
      }
   },
   INSERT:async(req,res) => {
      try {
         const { name } = req.body
         const count = await marksModel.count()
         const newMark = await marksModel.create({
            mark_name:name,
            mark_id:count+1
         })

         res.json(newMark)

      } catch (error) {
         console.log(error)
         res.sendStatus(500)
      }
   }
}