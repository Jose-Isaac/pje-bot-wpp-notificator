const express = require("express")
const { sendMessage } = require("../controller/sendMessageController")

const sendMessageRouter = express.Router()

sendMessageRouter.post('/', sendMessage)

module.exports = { sendMessageRouter }