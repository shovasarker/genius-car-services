// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAzewInfFGI9pcOI9STkHeq6CEb2gpwYK0',
  authDomain: 'genius-car-services-ss.firebaseapp.com',
  projectId: 'genius-car-services-ss',
  storageBucket: 'genius-car-services-ss.appspot.com',
  messagingSenderId: '237856261883',
  appId: '1:237856261883:web:a93d34bbacf127fd05525e',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
