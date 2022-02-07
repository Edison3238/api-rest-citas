const pgPromise = require('pg-promise')
const config={
    host:'localhost',
    port:'5433',
    database:'citasDB',
    user:'postgres',
    password:'12345'
}
const pgp = pgPromise({})
const db = pgp(config)
exports.db=db