import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from "react"

  //Server Side rendering 
const defaultEndpoint = 'https://swapi.dev/api/people/'

export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch(defaultEndpoint)
  //turn response into json 
  const character = await apiResponse.json()
    
  return {
    props: {
      character
    }
  }
}

export const CharacterSearch = ({ character }) => { 
  // console.log(character)
  const [characterQuery, setCharacterQuery] = useState('')
  const [characterResults, setCharacterResults] = useState([])
  const [page, updatePage] = useState({
    current: defaultEndpoint
  })
  
  const {current} = page 

  
  useEffect(() => {
    if (current === defaultEndpoint ) return; 

    async function request () { 
      const res = await fetch(current)
      const searchResponse = await res.json();

      updatePage({
        current,
        ...searchResponse.info
      })

      setCharacterResults(searchResponse.results)
      console.log(searchResponse)
    }
    request();
  }, [current]);
  
  
  const handleKeyPress = (event) => {
    setCharacterQuery(event.target.value)
    console.log(event.target.value)
  }

  
  const handleOnSubmitSearch = (e) => { 
    e.preventDefault();

    const endpoint = `https://swapi.dev/api/people/?search=${characterQuery}`

    updatePage({
      current: endpoint
    })
    console.log(characterQuery)
    // console.log(characterResults)
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
          {/* first, check if characterResults.count = 0 and if so, show "no results message" */}
          {/* if characterResults.count > 0
              loop over characterResults.results */}

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
                              <li>{character.starships}</li>
                            </ol>
                        </div>
                    </section>
                    
            }) : `Ive searched every galaxy and did not find anyone named ${characterQuery}` 
          }
          </article>
    </>
  )
}


export default CharacterSearch