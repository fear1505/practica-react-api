import useFormulario from "../hooks/useFormulario"
import Swal from 'sweetalert2'
const Formulario = ({setPersonaje}) => {

    const [inpust, handleChange, reset] = useFormulario({
        nombre: ""
    })
    
    const {nombre} = inpust
    
    const handleSubmit = e => {
        e.preventDefault()

        if(!nombre.trim()){
            return Swal.fire({
                title: 'Error!',
                text: 'No deja espacio en blanco',
                icon: 'error',
                
            })
        }
        setPersonaje(nombre.trim())
        reset()
    }

  return (
      <form onSubmit={handleSubmit}>
        <input 
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Ingrese el nombre del personaje"
            value={nombre}
            onChange={handleChange}
        />
        <div className=" mt-2">
            <button
                className="btn btn-primary me-1"
                type="submit"
            > Buscar
            </button>
        </div>
      </form>
  )
}

export default Formulario
