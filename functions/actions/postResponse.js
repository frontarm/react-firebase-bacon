const admin = require('firebase-admin')

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

module.exports = async ({ name, email }) => {
  let validationErrors = validate({ name, email })
  if (validationErrors) {
    return {
      status: 'error',
      code: 400,
      issues: validationErrors,
    }
  }

  let error = await db.runTransaction(async transaction => {
    let query = responses.where('email', '==', email)
    let result = await transaction.get(query)
    if (result.size) {
      return {
        status: 'error',
        code: 409,
        issues: {
          email: 'not-unique',
        },
      }
    }

    let responseRef = responses.doc()
    await transaction.create(responseRef, {
      email,
      name,
    })

    let countRef = counts.doc('responses')
    await transaction.set(countRef, { count: increment }, { merge: true })
  })

  return (
    error || {
      status: 'success',
    }
  )
}
