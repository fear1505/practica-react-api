import { useState } from "react"
import Formulario from "./components/Formulario"
import PintarDatos from "./components/PintarDatos"

const App = () => {
    const [personaje, setPersonaje] = useState("")

  return (
    <div className="container">
        <h1>App</h1>
        <Formulario setPersonaje={setPersonaje}/>
        <PintarDatos personaje={personaje}/>
    </div>
  )
}

export default App
