import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/functions'
import config from './config'

let firebaseApp = firebase.initializeApp(config.firebase)

export const db = firebaseApp.firestore()
export const functions = firebaseApp.functions()

if (process.env.NODE_ENV !== 'production') {
  functions.useFunctionsEmulator(
    process.env.REACT_APP_FUNCTIONS_URL || 'http://localhost:5000',
  )
}
