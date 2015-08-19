import express from 'express'
import db from 'lib/db'
import Home from './home'
import request from 'superagent'

let { API_URL } = process.env
let app = express()

app.get('/', (req, res, next) => {
  request.get(`${API_URL}/api/v1/tweets`).end((err, sres) => {
    if (err) return next(err)
    res.render(Home({ tweets: sres.body }))
  })
})

export default app
