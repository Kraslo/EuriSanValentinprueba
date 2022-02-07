import { Piruletas } from "../components"
import { useRouter } from "next/router"

function Enviar() {
    const { query } = useRouter();
    return <div className="home">
        <p>{query.emisor}</p>
        <Piruletas />
    </div>;
}

export default Enviar