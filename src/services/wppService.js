const wppConnect = require("@wppconnect-team/wppconnect")

let client
const wppCreateConnection = () => {
    wppConnect.create().then((createdClient) => {
        client = createdClient
        createdClient.onMessage((message) => {
            if (message.body) {
                console.log(message.body)
                console.log(message.from)
            }
        });
    });
}

const wppSendMessage = async (number, messages) => {
    for (let message of messages) {
        await client.sendText(`${number}@c.us`, message)
    }
}

const wppSendFile = async (number, pdf) => {
     await client.sendFile(
        number,
        pdf.tempFilePath,
        {
            type: 'document',
            mimetype: pdf.mimetype,
            filename: pdf.name
        }
    )
}

module.exports = { wppCreateConnection, wppSendMessage, wppSendFile }