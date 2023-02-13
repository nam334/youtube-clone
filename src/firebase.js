import {initializeApp} from "firebase/app"

import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"


export const firebaseConfig = {
    apiKey: "AIzaSyDXYFpjfORH-qu-fd8fteA1s_6uVjtY00Y",
    authDomain: "yt-clone-334.firebaseapp.com",
    projectId: "yt-clone-334",
    storageBucket: "yt-clone-334.appspot.com",
    messagingSenderId: "979560874192",
    appId: "1:979560874192:web:ef22dc0888c81ef05f5ed5"
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)

  export const db = getFirestore()

  export const storage = getStorage(app)

  export default app