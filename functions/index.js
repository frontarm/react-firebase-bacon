const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.cert(require('./.serviceaccount.json')),
})

exports.actions = {
  ...require('./actions/postResponse'),
}
