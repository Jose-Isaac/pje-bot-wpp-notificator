const { app } = require("./config")
const { nodemailer } = require("nodemailer")
const { wppCreateConnection } = require("./services/wppService")

const serverPort = process.env.SERVER_PORT || 3001

wppCreateConnection()

app.listen(serverPort, () => {
    console.log(`Server listening in ${serverPort}`);
});