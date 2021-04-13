import React, { useState, useEffect, useContext } from "react"
import { CharacterContext } from "./components/characterProvider"
import { searchComponent } from "./components/searchComponent"

import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/search.module.css'


export const CharacterSearch = ({  }) => { 
  const { getCharacterData, searchResults, starships, films, species } = useContext(CharacterContext)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
  // getCharacterData()
  }), []

  return (
    <>
      <Head>
        <title>Star Wars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <article className={styles.mainContainer}>
        <aside className={styles.asideContainer}>
          <div className={styles.logo}>
            <Image src="/starWarsLogo.png" alt="logo" height={100} width={200} />
          </div>
          <div>
            <h1 className={styles.pageTitle}>Explore the Galaxies</h1>
          </div>
          {/* search component goes here */}
          <searchComponent />
        </aside>


          {/* {
            searchResults.map(character => {
              return searchResults.length > 0 ?
                      <section key={character.name} className={styles.listContainer}>
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
                                  : `No Species info found.`
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
                    
                    : console.log(`I've searched every galaxy and did not find anyone named ${searchQuery}`)
            }) 
          } */}
          </article>
    </>
  )
}


export default CharacterSearch