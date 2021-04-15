import React, { useState, useContext } from "react"
import styles from '../styles/search.module.css'
import { CharacterContext } from "./characterProvider"


export const SearchComponent = ({  }) => { 
    const { getCharacterData } = useContext(CharacterContext)

    return (
        <>
            <form className={styles.searchContainer}>
                <input className={styles.searchInput} 
                onSubmit={
                    (changeEvent) => {
                        getCharacterData(changeEvent.target.value)
                    }
                } 
                name="name"
                type="search" 
                placeholder="Search for a character" />
            </form>
        </>
    )
}

export default SearchComponent