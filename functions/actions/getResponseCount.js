const admin = require('firebase-admin')

const db = admin.firestore()
const counts = db.collection('counts')

module.exports = async () => {
  let ref = counts.doc('responses')
  let snapshot = await ref.get()

  return {
    status: 'success',
    data: snapshot.data(),
  }
}
