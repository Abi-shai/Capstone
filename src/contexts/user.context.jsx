import { createContext, useEffect, useState, useReducer } from "react"
import { onAuthStateChangeListenner} from '../utils/firebase/firebase'
import { createUsersDocumentFromAuth } from "../utils/firebase/firebase"

// The actual value you want to access
// React context part
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

// Implementing reducer on top of react context
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER :
            return { ...state, currentUser: payload };
        default:
            throw new Error(`Unhandled type of ${type} for the userReducer`);
    };
};

export const UserProvider = ({ children}) => {
    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) =>
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, currentUser: user});
        
    const value = { currentUser, setCurrentUser };

    // Authentification process based on the auth from firebase/auth
    useEffect(() => {
        const unsubscribe = onAuthStateChangeListenner((user) => {

            if(user){
                createUsersDocumentFromAuth(user)
            };

            setCurrentUser(user);
        })
        return unsubscribe
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
