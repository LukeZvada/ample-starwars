import React, { useContext } from "react"
import { CharacterContext } from "./characterProvider"
import FilmList from "./filmList"
import SpeciesList from "./speciesList"
import StarshipList from "./starshipList"
import styles from '../styles/characterProfile.module.css'


export const CharacterProfile = ({  }) => { 
    const { searchResults } = useContext(CharacterContext)
    console.log(searchResults)
    //main character profile component that renders the character "about me" data. Also rendering the filmList, starshipList, and speciesList components
    if (searchResults.length === 1) {
        return (
            <>
                {
                    searchResults.map(character => {
                        return <section key={character.name} className={styles.listContainer}>
                                    <div className={styles.listSection}>
                                        <h1 className={styles.characterName}> {character.name} </h1>
                                        <h2 className={styles.listTitle}>About </h2>
                                            <ol className={styles.aboutList}>
                                                <li>
                                                    <label className={styles.formLabel}>Height:</label>
                                                    <span>{character.height}</span>
                                                </li>
                                                <li>
                                                    <label className={styles.formLabel}>Weight:</label>
                                                    <span>{character.mass}</span>
                                                </li>
                                                <li>
                                                    <label className={styles.formLabel}>Hair Color:</label> 
                                                    <span>{character.hair_color}</span>
                                                </li>
                                                <li>
                                                    <label className={styles.formLabel}>Date of Birth:</label> 
                                                    <span>{character.birth_year}</span></li>
                                                <SpeciesList />
                                            </ol>
                                    </div>
                                    <FilmList />
                                    <StarshipList />
                                </section>
                    }) 
                }
            </>
        )
    } else {
        return (
            <>
                <h1>Your search resulted in multiple results. Please use the list below for reference and search again!</h1>
                    {
                        searchResults.map(character => {
                            return <div className={styles.noResultsListSection}>
                                        <h2 className={styles.noResultsCharacterName}> {character.name} </h2>
                                    </div>
                            }) 
                    }
            </>
        )
    }
}


export default CharacterProfile