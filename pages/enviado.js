import { useRouter } from "next/router";
import { Piruleta } from "../components";

function Enviado() {

    const router = useRouter()

    const preventDefault = f => e => {
        e.preventDefault()
        f(e)
      }
    
    const handleClick = preventDefault(() => {
        router.push('/')
      })

    return <div className="home">
        <Piruleta />
        <div>
            <p>¡Gracias por enviar la piruleta! Seguro que a tu afortunad@ le va a gustar la piruleta ;)</p>
            <p>No te olvides de que para que la piruleta pueda ser enviada, debes pagarla.</p>
            <p>Si quieres mandar más piruletas a otr@s afortunad@s, pulsa el siguiente botón</p>
            <button onClick={handleClick}>Enviar más piruletas</button>
        </div>
    </div>;
}

export default Enviado;
