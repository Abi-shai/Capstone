import { initializeApp } from "firebase/app"
import {
  getAuth, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'


// Setting up all the configuration for the firebase authentification proccess and database storage

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
export const db = getFirestore()


// Create the user auth credentials in the firebase authentification database
export const createUsersDocumentFromAuth = async (
  userAuth, 
  additionnalInformation ={}) => {
  if(!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  // If user doesnt exist create one
  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionnalInformation
      })
    } catch (error) {
      console.log('Error creating the user', error)
    }
  }

  return userDocRef
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password){
    console.log('No credentials found')
    return
  }
  return await signInWithEmailAndPassword(auth, email, password)
}


export const signOutUser = async () => await signOut(auth)
export const onAuthStateChangeListenner = (callback) => onAuthStateChanged(auth, callback)