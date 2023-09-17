const { app }  = require("./config")
const { wppCreateConnection } = require("./services/wppService")

const serverPort = process.env.SERVER_PORT || 3000

wppCreateConnection()

app.listen(serverPort, () => {
    console.log(`Server listening in ${serverPort}`);
});