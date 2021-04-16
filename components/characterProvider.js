import React, { useState } from "react"

export const CharacterContext = React.createContext()

export const CharacterProvider = (props) => { 
    const [searchResults, setSearchResults] = useState([])
    const [starships, setStarships] = useState([])
    const [films, setFilms] = useState([])
    const [species, setSpecies] = useState([])

    //async function to handle searched character query param. If results are returned it moves on to use the url's returned to fetch starships, films, and species. 
    // If notthing is returned it sets the state to empty arrays to handle no search results. 
        const getCharacterData = async (searchCharacter) => {
            const res = await fetch(`https://6a3qc7kzj1.execute-api.us-west-2.amazonaws.com/prod/people/?search=${searchCharacter}`)
            const searchResponse = await res.json()
            
            if (searchResponse.count > 0) {
                const starships = await Promise.all(
                    searchResponse.results[0].starships.map(ship => {
                        return fetch(`${ship}`)
                        .then(res => res.json())
                        .catch(err => console.error(err))
                    })
                )
                
                const films = await Promise.all(
                    searchResponse.results[0].films.map(film => {
                        return fetch(`${film}`)
                        .then(res => res.json())
                        .catch(err => console.error(err))
                    })
                )
                
                const species = await Promise.all(
                    searchResponse.results[0].species.map(species => {
                        return fetch(`${species}`)
                        .then(res => res.json())
                        .catch(err => console.error(err))
                    })
                )
        
                setSpecies(species)
                setFilms(films)
                setStarships(starships)
                setSearchResults(searchResponse.results)
            } else {
                setSpecies([])
                setFilms([])
                setStarships([])
                setSearchResults([])
            }
        }

    return (
        <CharacterContext.Provider value={{
            getCharacterData, searchResults, starships, films, species
        }}>
            {props.children}
        </CharacterContext.Provider>
    )
}