const { app } = require("./config")
const { wppCreateConnection } = require("./services/wppService")
const { emailConnect } = require("./services/emailService")

const serverPort = process.env.SERVER_PORT || 3001

wppCreateConnection()
emailConnect()

app.listen(serverPort, () => {
    console.log(`Server listening in ${serverPort}`);
});