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

module.exports = { wppCreateConnection, wppSendMessage }