import React, { useState, useContext } from "react"
import styles from '../styles/search.module.css'
import { CharacterContext } from "./characterProvider"


export const SearchComponent = ({  }) => { 
    const { getCharacterData } = useContext(CharacterContext)
    const [searchQuery, setSearchQuery] = useState("")

    
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
                    placeholder="Search for a character" />
            </form>
        </>
    )
}

export default SearchComponent