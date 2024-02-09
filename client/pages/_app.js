import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

import Nav from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
