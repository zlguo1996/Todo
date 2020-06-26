import * as env from 'env-var'
import Knex from 'knex'
import Bookshelf from 'bookshelf'

const knex = Knex({
    client: 'mysql',
    connection: {
        host: env.get('DB_HOST').default('127.0.0.1').asString(),
        user: env.get('DB_USER').required().asString(),
        password: env.get('DB_PASSWORD').required().asString(),
        database: env.get('DB_DATABASE').required().asString(),
        charset: 'utf8',
    },
})

const bookshelf = Bookshelf(knex as any)
