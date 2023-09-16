const { wppSendMessage } = require("../services/wppService")
const sendMessage = (request, response) => {
    try {
        console.log("chegou no controller")
        const { number, messages } = request.body
        validateNumber(number)
        validateMessages(messages)

        wppSendMessage(number, messages[0])

        response.json({ message: 'Success send message'});
    } catch (error) {
        response
            .status(error.code || 500)
            .json({message: error.message})
    }
}

const validateMessages = (messages) => {
    // TUDO validar se o array não é vazio
    // TUDO validar se as mensagens no array respeita o limite máximo do whatsapp
    console.log("validando mensagens")
}

const validateNumber = (number) => {
    // TUDO validatar se o número estar no padrão +55DD999999999
    console.log("validando número")
}

module.exports = { sendMessage }