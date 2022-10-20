const express = require('express');
const MarksController = require('../controllers/marks.controller');
const router = express.Router()
const UsersController = require('./../controllers/users.controller')

router   
      .get('/users',UsersController.GET)
      .get('/marks',MarksController.GET)
      .post('/user',UsersController.INSERT)
      .post('/mark',MarksController.INSERT)

module.exports = router;