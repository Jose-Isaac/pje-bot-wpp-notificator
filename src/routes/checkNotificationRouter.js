const express = require("express")
const { checkIsValidNotification } = require('../controller/checkNotificationController')

const checkNotificationRouter = express.Router()

checkNotificationRouter.get('/:key', checkIsValidNotification)

module.exports = { checkNotificationRouter }