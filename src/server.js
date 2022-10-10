const express = require('express')
const http = require('http')
const app = express()
const PORT = 9000
const socketio = require('socket.io')


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