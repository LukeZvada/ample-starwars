import '../styles/globals.css'
import '../styles/search.module.css'
import { CharacterProvider, CharacterContext } from "../components/characterProvider"

function MyApp({ Component, pageProps }) {
  return (
    <CharacterProvider>
      <Component {...pageProps} />
    </CharacterProvider>
  )
}

export default MyApp
