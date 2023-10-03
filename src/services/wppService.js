const wppConnect = require("@wppconnect-team/wppconnect");

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

const wppSendMessage = (number, message) => {
    client.sendText(`${number}@c.us`, message)
}

const wppSendFile = (number, pdf) => {
     client.sendFile(
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