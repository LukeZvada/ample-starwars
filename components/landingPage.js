import { SearchComponent } from "../components/searchComponent"
import Image from 'next/image'

import styles from '../styles/search.module.css'


export const LandingPage = () => { 

    return (
        <aside className={styles.asideContainer}>
            <div className={styles.logo}>
                <Image src="/starWarsLogo.png" alt="logo" height={100} width={200} />
            </div>
            <div>
                <h1 className={styles.pageTitle}>Explore the Galaxies</h1>
            </div>
            <SearchComponent />
        </aside>
    )
}

export default LandingPage