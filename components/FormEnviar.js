import { useState } from 'react'
import { useRouter } from 'next/router'

function FormEnviar() {

  const router = useRouter()
  const [emisor, setEmisor] = useState('')
  const [receptor, setReceptor] = useState('')
  const [notita, setNotita] = useState('')

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }
  const handleSubmit = preventDefault(() => {
    router.push('/enviado')
  })

  const handleParam = ({ setValue }) => { e => setValue(e.target.value) }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Tu correo de la UPM (@alumnos.upm.es , @upm.es)</label><br></br>
        <input className="known-fact-input"
          onChange={handleParam(setEmisor)}
          pattern=".*@(?:alumnos.upm.es|upm.es|.*.upm.es)$"
          placeholder="email@alumnos.upm.es" /><br></br>
        <label for="html">Describe al afortunad@ (Nombre completo/Instagram/Twitter...). Si no te lo sabes, puedes describir al afortunad@ :D</label>
        <br></br>
        <input className="known-fact-input" id="receptor" onChange={handleParam(setReceptor)} placeholder="Afortunad@" /><br></br>
        <input className="known-fact-input" onChange={handleParam(setNotita)} placeholder="Déjale una notita <3" /><br></br>

        <button type="submit">Enviar Piruleta</button>
      </form>

    </div>
  );
}

export default FormEnviar;
