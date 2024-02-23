import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "yt-clone-2d624.firebaseapp.com",
    projectId: "yt-clone-2d624",
    storageBucket: "yt-clone-2d624.appspot.com",
    messagingSenderId: "594971327116",
    appId: "1:594971327116:web:d8f485cfb912279ade19a9"
  };

  firebase.initializeApp(firebaseConfig)
const auth=firebase.auth();
export default auth