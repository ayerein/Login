import { useState } from "react"
import { signUp } from "./logic/Login"

export const SignUp = ({ change }) => {
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    return(
        <div className="container-signup">
            <div className="container-img">
                <img src="./image2.svg" alt="Image register" />
            </div>
            <div className="signup">
                <p className="title">Registrarse</p>
                <div className="container-input">
                    <input className='input-login' id="email-signup" type="text" required name="email" onChange={(e)=> setEmail(e.target.value)} />
                    <label htmlFor="email-signup" className="input-label">Email</label>
                </div>
                
                <div className="container-input">
                    <input className='input-login' id="password" type="password" required name="password" onChange={(e)=> setPassword(e.target.value)} />
                    <label htmlFor="password-signup" className="input-label">Contraseña</label>
                </div>
                <button className="input-button" onClick={()=>signUp(email, password)}>Registrar</button>
                <p className="login-change-option" onClick={change}>Ya tengo una cuenta. Iniciar sesión</p>
            </div>
        </div>
    )
}