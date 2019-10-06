const admin = require('firebase-admin')
const functions = require('firebase-functions')

const db = admin.firestore()
const responses = db.collection('responses')

exports.getResponseCount = functions.https.onCall(async () => {
  let snapshot = await responses.get()

  return snapshot.size
})
