import * as env from 'env-var'
import Knex from 'knex'
import Bookshelf from 'bookshelf'
import { FullTodoItem } from 'common'

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

export const items = knex<FullTodoItem>('items')

export const bookshelf = Bookshelf(knex as any)

const Item = bookshelf.model('Item', {
    tableName: 'items',
})

const Order = bookshelf.model('Order', {
    tableName: 'order',
})
