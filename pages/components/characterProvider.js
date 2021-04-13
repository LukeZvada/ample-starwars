import React, { useState } from "react"

export const CharacterContext = React.createContext()

export const CharacterProvider = (props) => { 
    const [searchResults, setSearchResults] = useState([])
    const [starships, setStarships] = useState([])
    const [films, setFilms] = useState([])
    const [species, setSpecies] = useState([])

    const getCharacterData = async (searchCharacter) => {
        const res = await fetch(`https://swapi.py4e.com/api/people/?=${searchCharacter}`)
        const searchResponse = await res.json()

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

    return (
        <CharacterContext.Provider value={{
            getCharacterData, searchResults, starships, films, species
        }}>
            {props.children}
        </CharacterContext.Provider>
    )
}

export default CharacterContext;