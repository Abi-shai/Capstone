import { initializeApp } from "firebase/app"
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBJzNIkie85Qik8EvxBnntqF0M2KSZLtJ4",
  authDomain: "crown-project-5a4e0.firebaseapp.com",
  projectId: "crown-project-5a4e0",
  storageBucket: "crown-project-5a4e0.appspot.com",
  messagingSenderId: "1049391764982",
  appId: "1:1049391764982:web:e5affd349a98704d33a3d7"
}


const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)