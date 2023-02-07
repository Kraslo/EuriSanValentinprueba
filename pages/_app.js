import Head from "next/head";
import { Layout, PedidosCerrados } from "../components";

import "../styles/style.scss";

export default function MyApp({ Component, pageProps }) {

  return (
    <div className="app">
      <Head>
        <title>San Valentín</title>
        <meta name="description" content="Descubre si algún admirador te ha dejado alguna piruleta con mensaje!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
          <PedidosCerrados />
          {/* <Component {...pageProps} /> */}
        </Layout>
    </div>
        
  );
}
