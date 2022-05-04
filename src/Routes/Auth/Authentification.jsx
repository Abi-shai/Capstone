import SignUp from "../../components/SignUp/sign-up"
import SignIn from "../../components/SignIn/sign-in"

const Authentification = () => {
    return (
        <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', alignContent: 'center', width: '90%', margin:'auto'}}>
            <SignIn />
            <SignUp/>
        </div>
    )
}

export default Authentification