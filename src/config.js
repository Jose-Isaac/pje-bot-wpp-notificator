require("dotenv").config()
const cors = require("cors")
const { sendMessageRouter } = require("./routes/sendMessageRouter.js")
const { checkNotificationRouter } = require('./routes/checkNotificationRouter')
const upload = require("express-fileupload")

const express = require("express")

const app = express()

app.use(express.json());
app.use(cors());
app.use(upload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))

app.use("/send/message", sendMessageRouter)
app.use("/check/notification", checkNotificationRouter)

module.exports = { app }


