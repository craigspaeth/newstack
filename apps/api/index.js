import express from 'express'
import db from 'lib/db'

let app = express()

// GET /api/v1/tweets
app.get('/api/v1/tweets', (req, res, next) => {
  db.tweets.find((err, tweets) => {
    res.send(tweets)
  })
})

// POST /api/v1/tweets
app.post('/api/v1/tweets', (req, res, next) => {
  db.tweets.save(req.body, (err, tweet) => {
    res.send(tweet)
  })
})

export default app
