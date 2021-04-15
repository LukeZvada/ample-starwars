import { SearchComponent } from "../components/searchComponent"
import Image from 'next/image'
import styles from '../styles/landingPage.module.css'


export const LandingPage = () => { 

    //main landing page component. Rendering the logo, title, and search bar (from searchComponent.js). 
    return (
        <aside className={styles.asideContainer}>
            <div className={styles.logo}>
                <Image src="/starWarsLogo.png" alt="Starwars" height={100} width={200} />
            </div>
            <div>
                <h1 className={styles.pageTitle}>Explore the Galaxies</h1>
            </div>
            <SearchComponent />
        </aside>
    )
}

export default LandingPage