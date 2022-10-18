const express = require('express')
const router = express.Router()
const Users = require('./../controllers/users.controller')



router
   .get('/',Users.GET)
   .post('/new',Users.NEW_USER)

module.exports = router