const express = require("express")
const { sendNotification } = require("../controller/sendMessageController")

const sendMessageRouter = express.Router()

sendMessageRouter.post('/', sendNotification)

module.exports = { sendMessageRouter }