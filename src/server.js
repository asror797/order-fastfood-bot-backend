const express = require('express')
const http = require('http')
const cors = require('cors')
const app = express()
app.use(cors)
app.use(express.json())
const router = require('./routes/router.js')
const PORT = 9000
const socketio = require('socket.io')
require('./models/users.model')
const sequelize = require('./config/sequelize')




sequelize   
    .authenticate()
    .then(() => console.log('Connected'))
    .catch((err) => console.error(err))
sequelize.sync().then(() => console.log("OK"))


app.get('/',(req,res) => {
   res.send('ok')
})



const server = http.createServer(app)

const io = socketio(server)


io.on("connection",socket => {

   socket.on("connect",() => {
      console.log('Server is ready')
   })

})




server.listen(PORT,() => {
   console.log('Server is runing at 9000 port')
})



