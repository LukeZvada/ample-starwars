import React, { useState, useEffect } from "react"
import styles from '../../styles/search.module.css'
import { CharacterContext } from "./characterProvider"


export const searchComponent = ({  }) => { 
    const { searchCharacter } = useContext(CharacterContext)

    return (
        <>
            <form className={styles.searchContainer}>
                <input className={styles.searchInput} 
                onSubmit={
                    (changeEvent) => {
                        searchCharacter(changeEvent.target.value)
                    }
                } 
                name="name"
                type="search" 
                placeholder="Search for a character" />
            </form>
        </>
    )
}

export default searchComponent