// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAfCnphePmtQOtXDR4EJPCfrWOAH9DMY8c',
  authDomain: 'insta-2-clon.firebaseapp.com',
  projectId: 'insta-2-clon',
  storageBucket: 'insta-2-clon.appspot.com',
  messagingSenderId: '452978067876',
  appId: '1:452978067876:web:addb8bb59aabd822ba9931',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
