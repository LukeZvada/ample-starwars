import Head from 'next/head'
import styles from '../styles/Home.module.css'

export const CharacterSearch = ({character}) => { 
  console.log(character)
  return (
    <>
      <article className='main-container'>
          <h1>STARWARS</h1>
          <section className="character-info">
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
      </article>
    </>
  )
}

export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch(
    'https://swapi.dev/api/people/1'
  )
  //turn response into json 
  const character = await apiResponse.json()

  return {
    props: {
      character
    }
  }
}

export default CharacterSearch