const admin = require('firebase-admin')
const functions = require('firebase-functions')

const db = admin.firestore()
const increment = admin.firestore.FieldValue.increment(1)
const counts = db.collection('counts')
const responses = db.collection('responses')

function validate({ email, name }) {
  if (!name) {
    return {
      name: 'required',
    }
  }
  if (!email) {
    return {
      email: 'required',
    }
  }
  if (!/.+@.+/.test(email)) {
    return {
      email: 'invalid',
    }
  }
}

exports.postResponse = functions.https.onCall(async ({ name, email }) => {
  let validationErrors = validate({ name, email })
  if (validationErrors) {
    return {
      status: 'error',
      code: 400,
      issues: validationErrors,
    }
  }

  let query = responses.where('email', '==', email)
  let result = await query.get(query)
  if (result.size) {
    return {
      status: 'error',
      issues: {
        email: 'not-unique',
      },
    }
  }

  let responseRef = responses.doc()
  await responseRef.set({
    email,
    name,
  })

  let countRef = counts.doc('responses')
  await countRef.set({ count: increment }, { merge: true })

  return {
    status: 'success',
  }
})
