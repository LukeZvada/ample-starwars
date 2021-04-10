import Head from 'next/head'
import styles from '../styles/Home.module.css'

export const CharacterSearch = ({character}) => { 
  console.log(character)
  return (
    <div className='main-container'>
        <h1>STARWARS</h1>
        <h2>{character.height}</h2>
    </div>
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