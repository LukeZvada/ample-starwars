import React, { useState, useEffect } from "react"
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/search.module.css'


const defaultEndpoint = 'https://swapi.py4e.com/api/people/'

export const CharacterSearch = ({  }) => { 
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])
  const [species, setSpecies] = useState([])
  const [page, updatePage] = useState({
    current: defaultEndpoint
  })
  
  const {current} = page 

  useEffect(() => {
    if (current === defaultEndpoint ) return

    const fetchData = async () => { 
      const res = await fetch(current)
      const searchResponse = await res.json();

      updatePage({
        current,
        ...searchResponse.info
      })
      const starships = await Promise.all(
        searchResponse.results[0].starships.map(ship => {
          return fetch(`${ship}`)
          .then(res => res.json())
        })
      )
      
      const films = await Promise.all(
        searchResponse.results[0].films.map(film => {
          return fetch(`${film}`)
          .then(res => res.json())
        })
      )
      
      const species = await Promise.all(
        searchResponse.results[0].species.map(species => {
          return fetch(`${species}`)
          .then(res => res.json())
        })
      )

      setSpecies(species)
      setFilms(films)
      setStarships(starships)
      setSearchResults(searchResponse.results)
    }
    fetchData()
  }, [current]);



  const handleKeyPress = (event) => {
    if(event.keyCode === 13) {
      setSearchQuery(event.target.value)
    }
  }

  
  const handleOnSubmitSearch = (e) => { 
    e.preventDefault();

    const endpoint = `https://swapi.py4e.com/api/people/?search=${searchQuery}`

    updatePage({
      current: endpoint
    })
  }

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
          <form className={styles.searchContainer} onSubmit={handleOnSubmitSearch}>
              <input className={styles.searchInput} onKeyDown={handleKeyPress} 
                name="name"
                type="search" 
                placeholder="Search for a character" />
          </form>
        </aside>


          {
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
          }
          </article>
    </>
  )
}


export default CharacterSearch