
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/search.module.css'
import { CharacterProfile } from "../components/characterProfile"
import { SearchComponent } from "../components/searchComponent"
import LandingPage from '../components/landingPage'

export const Home = (props) => { 

  return (
    <>
      <Head>
        <title>Star Wars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article className={styles.mainContainer}>
        <LandingPage />
        <CharacterProfile />
      </article>
    </>
  )
}


export default Home