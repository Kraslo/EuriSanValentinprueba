import {useState} from 'react'
import {useRouter} from 'next/router'

function Login() {

  const router = useRouter()
  const [emisor, setEmisor] = useState('')

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }
  const handleSubmit = preventDefault(() => {
    router.push(`/enviar?emisor=${emisor}`, '/enviar')
  })

  const handleParam = ({setValue}) => {e => setValue(e.target.value)}

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input className="known-fact-input" 
        onChange={handleParam(setEmisor)}         
        pattern=".*@(?:alumnos.upm.es|upm.es|.*.upm.es)$"
        placeholder="email@alumnos.upm.es"/>
        <button type="submit">Entrar</button>
      </form>

    </div>
  );
}

export default Login;
