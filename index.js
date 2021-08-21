const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

io.on('connection', (socket) => {
    console.log("usser connected")

    socket.on('onchat', data => {
        io.emit("user_chat", data)
    })
})

server.listen(process.env.PORT || 4000, () => {
    console.log("listen to port 4000")
})