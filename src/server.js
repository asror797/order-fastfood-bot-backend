const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 9000
const router = require('./routes/router')

app.use(express.json())
app.use(cors())
app.use(router)


app.listen(PORT,() => {
   console.log('Server is ready at  9000 port')
})