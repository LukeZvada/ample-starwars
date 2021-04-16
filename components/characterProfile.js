import React, { useContext } from "react"
import { CharacterContext } from "./characterProvider"
import FilmList from "./filmList"
import SpeciesList from "./speciesList"
import StarshipList from "./starshipList"
import styles from '../styles/characterProfile.module.css'


export const CharacterProfile = ({  }) => { 
    const { searchResults, searchQuery } = useContext(CharacterContext)

    //first checking if the user is conducting a search 
    //if the user has not conducted a search return nothing 
    if (searchQuery === "" ) {
        return null

    //if the search conducted returns only one character show them the character profile for that one returned user
    } else if (searchResults.length === 1) {
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
    //is the search conducted returns more than one result then show them a list of the character names returned and message use to use the list as reference and search again
    } else if (searchResults.length > 1) {
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
    //if the user conducted a search that did not yeild results. Return a message to notify the user. 
    } else {
        return (
            <>
                <p className={styles.unvalidCharacterMessage}>Please enter a valid character</p>
            </>
        )
    }
}


export default CharacterProfile