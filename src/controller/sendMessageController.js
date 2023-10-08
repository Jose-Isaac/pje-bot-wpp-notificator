const { sendNotificationMessage } = require('../services/sendNotificationService')


const sendNotification = async (request, response) => {
    try {

        const { number, email, messages } = request.body
        const { pdf } = request.files

        const notificationResponse = await sendNotificationMessage(
            number,
            email,
            JSON.parse(messages),
            pdf
        )

        response.json({...notificationResponse})
    } catch (error) {
        response
            .status(error.code || 500)
            .json({error: {message: error.message}})
    }
}

module.exports = { sendNotification }