
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/search.module.css'
import { CharacterList } from "../components/characterList"
import { SearchComponent } from "../components/searchComponent"

export const Home = (props) => { 

  return (
    <>
      <Head>
        <title>Star Wars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <aside className={styles.asideContainer}>
                <div className={styles.logo}>
                <Image src="/starWarsLogo.png" alt="logo" height={100} width={200} />
                </div>
                <div>
                <h1 className={styles.pageTitle}>Explore the Galaxies</h1>
                </div>
                <SearchComponent />
      </aside>
      <CharacterList {...props} />
    </>
  )
}


export default Home