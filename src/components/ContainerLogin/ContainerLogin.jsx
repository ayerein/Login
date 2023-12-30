import { useState } from "react"
import { SingIn } from "../SignIn"
import { SignUp } from "../SignUp"

export const ContainerLogin = () => {
    const [ signInSignUp, setSignInSignUp ] = useState(true)

    function change(){
        setSignInSignUp(!signInSignUp)
    }
    return( 
        <div className="container-login">
            {
                signInSignUp ?
                <SingIn change={change}/>
                :
                <SignUp change={change}/>
            }
        </div>
    )
}