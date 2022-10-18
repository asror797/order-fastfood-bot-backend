const express = require('express')
const app =express()
const cors = require('cors')
const router = require('./routes/router')
const sequelize = require('./config/sequelize')

require('./models/users.model')

sequelize   
    .authenticate()
    .then(() => console.log('Connected'))
    .catch((err) => console.error(err))
sequelize.sync().then(() => console.log("OK"))

app.use(cors())
app.use(express.json())
app.use(router)





app.listen(9000,() => {
   console.log('Server is runing at 900 port')
})