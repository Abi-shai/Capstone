import { signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { onAuthStateChangeListenner} from '../utils/firebase/firebase'
import { createUsersDocumentFromAuth } from "../utils/firebase/firebase"

// The actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

// Component that allows any children to use the value of the UserContext
export const UserProvider = ({ children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }


    // Authentification process based on the auth from firebase/auth
    useEffect(() => {
        const unsubscribe = onAuthStateChangeListenner((user) => {

            if(user){
                createUsersDocumentFromAuth(user)
            }

            setCurrentUser(user)
            console.log(user)

        })
        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}