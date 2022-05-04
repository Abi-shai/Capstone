import { useState } from "react"
import { signInAuthUserWithEmailAndPassword  } from '../../utils/firebase/firebase'
import { createUsersDocumentFromAuth } from "../../utils/firebase/firebase"
import { signInWithGooglePopup } from "../../utils/firebase/firebase"
import FormInput from "../Form-input/form-input"
import Button from "../Button/button"
import './sign-in.scss'


// Initial field state
const defaultDisplayFields = {
    email: '',
    password: '',
}


const SignInForm = () =>{
    const [formFields, setFormFields] = useState(defaultDisplayFields)
    const { email, password } = formFields


    const resetFormFields = () => {
        setFormFields(defaultDisplayFields)
    }

    
    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!email || !password){
            return
        }
        try {

            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields()

        } catch (error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password')
                    break
                case 'auth/user-not-found':
                    alert('User not found')
                    break
                default :
                    console.log(error)
            }
        }

    }

    const handleChange = (event) => {
        // Retreving the name and value from the event
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
        console.log(formFields)
    }

    const SignInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        await createUsersDocumentFromAuth(user)
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span className="sign-up_text">Sign in with your email and password</span>
            <form 
                className="form_wrapper" 
                onSubmit={handleSubmit}>

                <FormInput
                    label='Email'
                    type='email'
                    onChange={handleChange} 
                    required
                    name="email"
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    onChange={handleChange} 
                    required
                    name="password"
                    value={password}
                />

                <div style={{
                    display: 'grid', 
                    gridTemplateColumns:'1fr 1fr', 
                    gap:'1em'
                }}>
                    <Button type='submit'>Sign in</Button>
                    <Button 
                        onClick={SignInWithGoogle} 
                        buttonType='google' 
                        type='button'
                    >Google sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm