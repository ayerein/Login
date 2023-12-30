import './App.css'
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/config"
import { ContainerLogin } from "./components/ContainerLogin/ContainerLogin"
import { Home } from "./components/home"

function App() {
  const [ login, setLogin ] = useState(true)

  useEffect(()=> {
    onAuthStateChanged(auth, (userFirebase) => { userFirebase ? setLogin(userFirebase) : setLogin(null)})
},[])

  return (
    <div className="container">
      {
        login ?
        <Home />
        :
        <ContainerLogin />
      }
    </div>
  )
}

export default App
