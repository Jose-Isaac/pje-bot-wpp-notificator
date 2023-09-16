const { app }  = require("./config")
const wppConnect = require("@wppconnect-team/wppconnect");

wppConnect.create().then((createdClient) => {
    createdClient.onMessage((message) => {
        if (message.body) {
            console.log(message.body)
        }
    });
});

const serverPort = process.env.SERVER_PORT
app.listen(serverPort, () => {
    console.log(`Server listening in ${serverPort}`);
});