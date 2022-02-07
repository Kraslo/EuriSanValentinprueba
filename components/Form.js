import {useState} from 'react'
import {useRouter} from 'next/router'

function Form({ children }) {

  const router = useRouter()
  const [query, setQuery] = useState('')

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }
  const handleSubmit = preventDefault(() => {
    router.push(`/enviar?emisor=${query}`, '/enviar')
  })
  const handleParam = setValue => e => setValue(e.target.value)

  return (
    <div className="form-container">
      {
        // Instagram, email or something
      }
      <form onSubmit={handleSubmit}>
        <input className="known-fact-input" onChange={handleParam(setQuery)}/>
        <button type="/submit">Entrar</button>
      </form>

    </div>
  );
}

export default Form;
