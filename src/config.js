require("dotenv").config()
const cors = require("cors")
const { sendMessageRouter } = require("./routes/sendMessageRouter.js")
const upload = require('express-fileupload')

const express = require("express")

const app = express()

app.use(express.json());
app.use(cors());
app.use(upload({ useTempFiles: true }))

app.use("/send/message", sendMessageRouter)

module.exports = { app }


