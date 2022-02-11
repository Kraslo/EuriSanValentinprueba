import { Piruletas } from "../components";

function NoPiruleta() {
  return <div className="piruletas-result-container">
    <Piruletas />
        <div className="message-container">
            <h2>No hay piruleta/s para estos datos</h2>
            <p>Puede que tu nombre y/o cuenta de Instgram/Twitter esté mal. También puede ser que tus colegas no sean muy salaos.</p>
            <p>Para quejas, dudas o sugerencias, puedes dar a &quot;Contacto&quot; en la barra de navegación.</p>
        </div>
  </div>
}

export default NoPiruleta;