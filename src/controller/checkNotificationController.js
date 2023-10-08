const { checkByKey } = require('../services/checkNotificationService')

const checkIsValidNotification = async (request, response) => {
    try {
        const { key } = request.params
        console.log('key: ' + key)

        const checkResponse = await checkByKey(key)

        response.json({...checkResponse})

    } catch (error) {
        response
            .status(error.code || 500)
            .json({ message: error.message })
    }
}

module.exports = { checkIsValidNotification }