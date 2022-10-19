const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 9000
const sequelize = require('./config/sequelize')
const router = require('./routes/router')
require('./model/users.model')

sequelize   
    .authenticate()
    .then(() => console.log('Connected'))
    .catch((err) => console.error(err))
sequelize.sync().then(() => console.log("OK"))

app.use(express.json())
app.use(cors())
app.use(router)


app.listen(PORT,() => {
   console.log('Server is ready at  9000 port')
})