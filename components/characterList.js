import React, { useState, useContext } from "react"
import styles from '../styles/search.module.css'
import { CharacterContext } from "./characterProvider"
import Image from 'next/image'
import { SearchComponent } from "../components/searchComponent"


export const CharacterList = ({  }) => { 
    const { searchResults, starships, films, species } = useContext(CharacterContext)
    
    return (
    <>
        <article className={styles.mainContainer}>
            {
                searchResults.count > 0 ?
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
                                {
                                    species.length > 0 ?
                                        species.map(species => {
                                            return <li key={species._id}>Species: {species.classification}</li>
                                        })
                                    : `No species info found.`
                                }
                                </ol>
                        </div>
                        <div className={styles.listSection}> 
                            <h2 className={styles.listTitle}>Film Appearances</h2>
                            <ol>
                            {
                                films.length > 0 ?
                                films.map(film => {
                                    return <li key={film.url}>{film.title}</li>
                                })
                                : `No films here.`
                            }
                            </ol>
                        </div>
                        <div className={styles.listSection}> 
                            <h2 className={styles.listTitle}>Starships Flown</h2>
                            <ol>
                                {
                                starships.length > 0 ?
                                starships.map(ship => {
                                    return <li key={ship.name}>{ship.name}</li>
                                })
                                : `${character.name} does not fly any starships.`
                                }
                            </ol>
                        </div>
                    </section>
                }) 
                : ""
            }
        </article>
    </>
    )
}


export default CharacterList