import App from 'next/app'
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
// import "../../node_modules/bootstrap/dist/js/bootstrap.esm.min"
// import "../../node_modules/bootstrap/dist/js/bootstrap.esm"
// import "~bootstrap/dist/js/bootstrap.esm.min"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Document, { Html, Head, Main, NextScript } from 'next/document'
import "../custom.scss"
function MyApp({ Component, pageProps }) {
  return (
        <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        </>

  )
}

export default MyApp