const express = require('express')
const router = express.Router()
const UsersController = require('./../controllers/users.controller')

router   
      .get('/users',UsersController.GET)
      .post('/user',UsersController.INSERT)

module.exports = router;