import React, { useContext } from "react"
import { CharacterContext } from "./characterProvider"
import styles from '../styles/characterProfile.module.css'


export const FilmList = ({  }) => { 
    const { films } = useContext(CharacterContext)

    return (
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
    )
}

export default FilmList