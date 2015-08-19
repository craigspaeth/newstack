import express from 'express'
import Layout from 'components/layout'
import api from 'apps/api'
import home from 'apps/home'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import helpers from 'lib/helpers'

let { PORT } = process.env
let app = express()

// Common middleware
app.use(helpers)
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(morgan('dev'))

// Mounts apps
app.use(api)
app.use(home)

// Start
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
