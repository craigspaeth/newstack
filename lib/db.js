import mongojs from 'mongojs'

let { MONGOHQ_URL } = process.env
let db = mongojs(MONGOHQ_URL, ['tweets'])

export default db
