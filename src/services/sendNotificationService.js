const { wppSendMessage, wppSendFile } = require('./wppService')
const { sendEmail } = require('./emailService')
const { save } = require("../database/notificatorRepository");
const { v4: uuidv4 } = require('uuid')

const sendNotificationMessage = async (number, email, messages, pdf) => {
    console.log(messages)

    try {
        validateMessages(messages)
        validateNumber(number)
        validateEmail(email)

        // if (number !== null) {
        //     await wppSendMessage(number, messages)
        //     await wppSendFile(number, pdf)
        // }

        // if (email !== null) await sendEmail(email, messages)

        const key = await saveNotification(number)

        return { key, message: 'Notificação enviada com sucesso!' }
    } catch (error) {
        return { error: { code: error.code || 500, message: error.message } }
    }
}

const saveNotification = async (number) => {
    const key = uuidv4()

    await save(
        {
            number,
            key
        }
    )

    return key
}

const validateMessages = (messages) => {
    // TUDO validar se o array não é vazio
    // TUDO validar se as mensagens no array respeita o limite máximo do whatsapp
    console.log("Validando mensagens...")

    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];

        if (message.length > 700) {
            // Divide a message em partes de tamanho máximo de 700 caracteres
            for (let j = 0; j < message.length; j += 700) {
                sliced_message = message.substring(j, j + 700);
                messages.push(sliced_message);
            }
        }
    }
}

const validateNumber = (number) => {
    // TUDO validatar se o número estar no padrão +55DDD999999999
    console.log("Validando número...")

    // Remova todos os caracteres não numéricos do número
    number = number.replace(/\D/g, '');
    console.log(number);

    // Se o número começa com '55'
    if (!number.startsWith('55')) {
        // Se não começar com '55', adicione '55' no início
        number = '55' + number;
    }

    // Se há um '9' após o DDD
    // if (number.charAt(5) !== '9') {
    //     // Se não houver '9', adiciona após o DDD
    //     number = number.slice(0, 5) + '9' + number.slice(5);
    // }

    try {
        // Se o número tem pelo menos 13 dígitos (incluindo o '55')
        if (number.length !== 13) {
            throw new Error('Número de whatsapp inválido');
        }

        // Se o DDD é válido (do 11 ao 99)
        const ddd = number.slice(3, 5);
        if (!/^\d{2}$/.test(ddd) || parseInt(ddd) < 11 || parseInt(ddd) > 99) {
            throw new Error('Número de whatsapp inválido');
        }
    } catch (error) {
        console.error(error.message);
    }
}

const validateEmail = () => {
    // TODO implement email validation
}
module.exports = { sendNotificationMessage }