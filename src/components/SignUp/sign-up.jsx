import { useState } from "react"
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase"
import { createUsersDocumentFromAuth } from "../../utils/firebase/firebase"
import FormInput from "../Form-input/form-input"
import Button from "../Button/button"
import './sign-up.scss'


// Set initial value of the input fields
const defaultDisplayFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(defaultDisplayFields)
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defaultDisplayFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== confirmPassword){
            alert(`Password doesn't match`)
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            )
            await createUsersDocumentFromAuth(user, { displayName })

            resetFormFields()
            alert('You have successfully signed up')
            return
            
        } catch (error) {

            if(error.code === 'auth/email-already-in-use'){
                alert('You already have an account')
            }

            console.log(
                'An error occured on creating the user with email and password',
                error
            )
        }
    }

    const handleChange = (event) => {
        // Retreving the name and value from the event
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
        console.log(formFields)
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span className="sign-up_text">Sign up with your email and password</span>
            <form className="form_wrapper" onSubmit={handleSubmit}>

                <FormInput
                    label='Display Name'
                    type='text'
                    id="name"
                    onChange={handleChange}
                    required
                    name="displayName"
                    value={displayName}
                />

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

                <FormInput
                    label='Confirm Password'
                    type='password'
                    onChange={handleChange}
                    required
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type='submit'>Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm