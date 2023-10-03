const express = require("express")
const {
    sendMessage,
    sendMessageWithPdf
} = require("../controller/sendMessageController")

const sendMessageRouter = express.Router()

sendMessageRouter.post('/', sendMessage)
sendMessageRouter.post('/pdf', sendMessageWithPdf)

module.exports = { sendMessageRouter }