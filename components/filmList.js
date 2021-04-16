import React, { useContext } from "react"
import { CharacterContext } from "./characterProvider"
import styles from '../styles/characterProfile.module.css'


export const FilmList = ({  }) => { 
    const { films } = useContext(CharacterContext)

    //basic component to handle looping through film data and returning just the title
    return (
        <div className={styles.listSection}> 
            <h2 className={styles.listTitle}>Film Appearances</h2>
                <ol>
                {
                    films.length > 0 ?
                    films.map(film => {
                        return <li key={film.url}>{film.title}</li>
                    })
                    : `No films appearances in the database.`
                }
                </ol>
        </div>
    )
}

export default FilmList