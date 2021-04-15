import '../styles/globals.css'
import '../styles/landingPage.module.css'
import { CharacterProvider } from "../components/characterProvider"

function MyApp({ Component, pageProps }) {
  return (
    <CharacterProvider>
      <Component {...pageProps} />
    </CharacterProvider>
  )
}

export default MyApp
