import React from "react"
import ReactDOM from "react-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { MyContext } from '../context/state'


function MyApp({ Component, pageProps }) {

  return (
    <MyContext>
      <Component {...pageProps} />
    </MyContext>
  )
}

export default MyApp
