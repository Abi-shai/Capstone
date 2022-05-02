import { Fragment } from "react"
import { signInWithGooglePopup, createUsersDocumentFromAuth } from '../../utils/firebase/firebase'
import SignUpForm from "../../components/Sign-up/sign-up"

const SignIn = () => {

    const logInUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDoc = await createUsersDocumentFromAuth(user)
    }

    return (
        <Fragment>
            <p>This is the sign in page</p>
            <button onClick={logInUser}>
                Sign in with google pop up
            </button>
            <SignUpForm/>
        </Fragment>
    )
}

export default SignIn