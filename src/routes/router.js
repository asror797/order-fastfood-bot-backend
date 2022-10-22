const express = require('express');
const MarksController = require('../controllers/marks.controller');
const ModelsController= require('../controllers/models.controller');
const router = express.Router()
const UsersController = require('./../controllers/users.controller')

router   
      .get('/users',UsersController.GET)
      .get('/marks',MarksController.GET)
      .get('/models',ModelsController.GET)
      .post('/user',UsersController.INSERT)
      .post('/mark',MarksController.INSERT)

module.exports = router;