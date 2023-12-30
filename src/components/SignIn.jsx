import { useState } from "react"
import { signIn } from "./logic/Login"

export const SingIn = ({ change }) => {
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    

    return(
        <div className="container-signin">
            <div className="container-img">
                <img src="./image.svg" alt="Image login" />
            </div>
            <div className="signin">
                <p className="title">Iniciar sesión</p>
                <div className="container-input">
                    <input className='input-login' id="email-signin" required type="text" name="email" onChange={(e)=> setEmail(e.target.value)} />
                    <label htmlFor="email-signin" className="input-label">Email</label>
                </div>
                <div className="container-input">
                    <input className='input-login' id="password-signin" required type="password" name="password" onChange={(e)=> setPassword(e.target.value)} />
                    <label htmlFor="password-signin" className="input-label">Contraseña</label>
                </div>
                <button className="input-button" onClick={()=>signIn(email, password)}>Iniciar Sesión</button>
                <p className="login-change-option" onClick={change}>Quiero registrar mi cuenta</p>
            </div>
        </div>
    )
}