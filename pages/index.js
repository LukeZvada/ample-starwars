import Head from 'next/head'
import styles from '../styles/search-home.module.css'
import React, { useState, useEffect } from "react"


const defaultEndpoint = 'https://swapi.py4e.com/api/people/'

export const CharacterSearch = ({  }) => { 
  const [characterQuery, setCharacterQuery] = useState('')
  const [characterResults, setCharacterResults] = useState([])
  const [starships, setStarships] = useState([])
  const [films, setFilms] = useState([])
  const [species, setSpecies] = useState([])
  const [page, updatePage] = useState({
    current: defaultEndpoint
  })
  
  const {current} = page 

  
  useEffect(() => {
    if (current === defaultEndpoint ) return; 

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

      console.log(films)

      setSpecies(species)
      setFilms(films)
      setStarships(starships)
      setCharacterResults(searchResponse.results)
    }
    fetchData()
  }, [current]);



  const handleKeyPress = (event) => {
    if(event.keyCode === 13) {
      setCharacterQuery(event.target.value)
      console.log(event.target.value)
    }
  }

  
  const handleOnSubmitSearch = (e) => { 
    e.preventDefault();

    const endpoint = `https://swapi.py4e.com/api/people/?search=${characterQuery}`

    updatePage({
      current: endpoint
    })
  }

  return (
    
    <>
      <article className='main-container'>
          <h1>STARWARS</h1>
          <form className='search' onSubmit={handleOnSubmitSearch}>
            <input onKeyDown={handleKeyPress} 
              name="name"
              type="search" 
              placeholder="Search for a character" />
          </form>


          {
            characterResults.length > 0 ?
            characterResults.map(character => {
              return <section key={character.name} className="character-info">
                      <h1 className='character-name'>{character.name}</h1> 
                        <div className='about-me list-section'>
                          <h2>About {character.name}</h2>
                            <ol>
                              <li>Height: {character.height}</li>
                              <li>Weight: {character.mass}</li>
                              <li>Hair Color: {character.hair_color}</li>
                              <li>Date of Birth: {character.birth_year}</li>
                              {
                                species.length > 0 ?
                                species.map(species => {
                                  return <li key="length">Species: {species.classification}</li>
                                })
                                : `No Species info found.`
                              }
                            </ol>
                        </div>
                        <div className='film-appearances list-section'> 
                          <h2>Film Appearances</h2>
                            <ol>
                            {
                                films.length > 0 ?
                                films.map(film => {
                                  return <li key="length">{film.title}</li>
                                })
                                : `No films here.`
                            }
                            </ol>
                        </div>
                        <div className='starships-flown list-section'> 
                          <h2>StarShips Flown</h2>
                            <ol>
                              {
                                starships.length > 0 ?
                                starships.map(ship => {
                                  return <li key="length">{ship.name}</li>
                                })
                                : `No starships here.`
                              }
                            </ol>
                        </div>
                    </section>
                    
            }) : `I've searched every galaxy and did not find anyone named ${characterQuery}`
          }
          </article>
    </>
  )
}


export default CharacterSearch