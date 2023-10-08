const knex = require("knex");
const dotenv = require('dotenv')

dotenv.config()

const database = knex({
    client: 'pg',
    connection: {
        connectionString: 'postgresql://local:local@localhost:5432/pje-bot',
        host: 'localhost',
        port: '5432',
        user: 'local',
        database: 'pje-bot',
        password: 'local',
        ssl: false,
    }
})

const save = async (data) => {
    const result = await database.insert(data).into('notification')

    console.log(result)
}

const findByKey = async (key) => {
    const result = await database()
        .where({ key })
        .select()
        .first().into('notification')

    return result !== undefined
}

module.exports = { save, findByKey }