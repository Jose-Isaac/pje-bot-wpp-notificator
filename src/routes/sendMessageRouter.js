const express = require("express")
const { sendMessage, sendPdfFile } = require("../controller/sendMessageController")

const sendMessageRouter = express.Router()

sendMessageRouter.post('/', sendMessage)
sendMessageRouter.post('/pdf', sendPdfFile)

module.exports = { sendMessageRouter }