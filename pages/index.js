import Head from 'next/head'
import styles from '../styles/search-home.module.css'
import React, { useState, useEffect } from "react"

  //Server Side rendering 
const defaultEndpoint = 'https://swapi.py4e.com/api/people/'

export const CharacterSearch = ({  }) => { 
  // console.log(character)
  const [characterQuery, setCharacterQuery] = useState('')
  const [characterResults, setCharacterResults] = useState([])
  const [starships, setStarships] = useState([])
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
        searchResponse.results[0].starships.map(sh => {
          return fetch(`${sh}`)
          .then(res => res.json())
        })
      )

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
                        <div className='about-me'>
                          <h2>About {character.name}</h2>
                            <ol>
                              <li>Height: {character.height}</li>
                              <li>Weight: {character.mass}</li>
                              <li>Hair Color: {character.hair_color}</li>
                              <li>Date of Birth: {character.birth_year}</li>
                              <li>Species Information: {character.species} </li>
                            </ol>
                        </div>
                        <div className='film-appearances'> 
                          <h2>Film Appearances</h2>
                            <ol>
                              <li>{character.films}</li>
                            </ol>
                        </div>
                        <div className='starships-flown'> 
                          <h2>StarShips Flown</h2>
                            <ol>
                              {
                                starships.length > 0 ?
                                starships.map(sh => {
                                  return <li key="MGLT">{sh.name}</li>
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