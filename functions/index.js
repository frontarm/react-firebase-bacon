const cors = require('cors')
const express = require('express')
const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp({
  credential: admin.credential.cert(require('./.serviceaccount.json')),
})

/**
 * Remotely callable versions of actions. You'll want to use these over
 * a JSON API where possible.
 */

exports.actions = {
  postResponse: functions.https.onCall(require('./actions/postResponse')),
}

/**
 * Create a JSON API version of the actions, just because we can.
 */

const app = express()

// Automatically allow cross-origin requests
app.use(cors({ origin: true }))

// Allow json data to be passed in via the body
app.use(express.json())

const asyncMiddleware = fn => (req, res, next) => {
  let params = {
    ...req.query,
    ...req.params,
    ...req.body,
  }
  Promise.resolve(fn(params, req, res, next))
    .then(result => {
      if (result.code) {
        res.status(result.code)
      } else if (result.status !== 'success') {
        res.status(500)
      }
      res.json(result)
    })
    .catch(() => {
      res.status(500)
    })
}

// build multiple CRUD interfaces:
app.post('/response', asyncMiddleware(require('./actions/postResponse')))
app.get(
  '/response-count',
  asyncMiddleware(require('./actions/getResponseCount')),
)

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app)
