import React, { useState, useContext } from "react"
import styles from '../styles/landingPage.module.css'
import { CharacterContext } from "./characterProvider"


export const SearchComponent = ({  }) => { 
    const { getCharacterData } = useContext(CharacterContext)
    const [searchQuery, setSearchQuery] = useState("")

    // search component which is rendered on the landing page
    return (
        <>
            <form className={styles.searchContainer}
            onSubmit={
                (e) => {
                    e.preventDefault()
                    getCharacterData(searchQuery)
                }
            } >
                <input className={styles.searchInput} 
                    onChange={e => setSearchQuery(e.target.value)}
                    name="name"
                    type="search" 
                    placeholder="Search for a character"
                    aria-label="Search through site content" />
            </form>
        </>
    )
}

export default SearchComponent