import Head from "next/head"
import Script from "next/script"
import '../styles/globals.css'
import $ from 'jquery'
$.Datatable = require('datatables.net')

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"></link>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css"></link>
    
    <title>CForms - Contact Form Submit</title>
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
    
   
   
    <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
