import React, { useState, useContext } from "react"
import { CharacterContext } from "./characterProvider"
import FilmList from "./filmList"
import SpeciesList from "./speciesList"
import StarshipList from "./starshipList"
import styles from '../styles/search.module.css'


export const CharacterList = ({  }) => { 
    const { searchResults } = useContext(CharacterContext)

    return (
        <>
            {
                searchResults.length > 0 ?
                    searchResults.map(character => {
                    return <section key={character.name} className={styles.listContainer}>
                        <div className={styles.listSection}>
                            <h1 className={styles.characterName}> {character.name} </h1>
                            <h2 className={styles.listTitle}>About </h2>
                                <ol className={styles.about}>
                                    <li>Height: {character.height}</li>
                                    <li>Weight: {character.mass}</li>
                                    <li>Hair Color: {character.hair_color}</li>
                                    <li>Date of Birth: {character.birth_year}</li>
                                    <SpeciesList />
                                </ol>
                        </div>
                        <FilmList />
                        <StarshipList />
                    </section>
                }) 
                : ""
            }
        </>
    )
}


export default CharacterList