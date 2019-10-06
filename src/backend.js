import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config'

let firebaseApp = firebase.initializeApp(config.firebase)

export const db = firebaseApp.firestore()
