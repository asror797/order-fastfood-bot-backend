const express = express
const router = express.Router()
const UsersController = require('./../controllers/users.controller')

router   
      .get('/user',UsersController.GET)

module.exports = router;