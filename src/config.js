require("dotenv").config()
const cors = require("cors")
const { sendMessageRouter } = require("./routes/sendMessageRouter.js")

const express = require("express")

const app = express()

app.use(express.json());
app.use(cors());

app.use("/send/message", sendMessageRouter)

module.exports = { app }


