import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AppWrapper } from '../context/state'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
