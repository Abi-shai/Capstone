import { Fragment } from "react"
import { signInWithGooglePopup } from '../../utils/firebase/firebase'

const SignIn = () => {

    const logInUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }

    return (
        <Fragment>
            <p>This is the sign in page</p>
            <button onClick={logInUser}>
                Sign in with google pop up
            </button>
        </Fragment>
    )
}

export default SignIn