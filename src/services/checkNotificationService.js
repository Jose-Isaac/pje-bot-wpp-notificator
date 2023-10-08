const { findByKey } = require('../database/notificatorRepository')

const checkByKey = async (key) => {
    const result = await findByKey(key)

    if (result) {
        return {
            isValid: true,
            message: 'Confirmado! Messagem enviada pelo pje-bot'
        }
    } else {
        return {
            isValid: false,
            message: 'Negativo! Messagem não enviada pelo pje-bot'
        }
    }
}

module.exports = { checkByKey }