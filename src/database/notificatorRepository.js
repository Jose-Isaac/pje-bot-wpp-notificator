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
database.schema.createTable('notification', function (table) {
        table.increments('id').primary()
        table.uuid('key').notNullable()
        table.string('number').notNullable()
    })

database('notification')
    .insert({
        key: 'valor_key',
        number: '123',
    })
    .then(() => {
        console.log('Inserção de dados bem-sucedida');
    })
    .catch((error) => {
        console.error('Erro ao inserir dados:', error);
    });

const save = async (data) => {
    const result = await database.insert(data).into('notification')

    console.log(result)
}

const findByKey = async (key) => {
    const result = database
        .select('*')
        // .where({ key })
        .into('notification')

    console.log(result[0])

    return true
}

module.exports = { save, findByKey }