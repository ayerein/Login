import { leaveSesion } from "./logic/Login"

export const Home = () => {
    return(
        <div className="container-home">
            <h1>Iniciaste sesión</h1>
            <button className="input-button" onClick={leaveSesion}>Cerrar Sesion</button>
        </div>
    )
}