import '../styles/global.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return <> <Head><link href="https://fonts.googleapis.com/css2?family=Lato&family=Lora:wght@500&family=Montserrat:wght@400;500&family=Oswald&family=Raleway:wght@500&display=swap" rel="stylesheet"/></Head> <Component {...pageProps} /> </>
  }