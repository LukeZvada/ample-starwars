import React, { useContext } from "react"
import { CharacterContext } from "./characterProvider"
import styles from '../styles/characterProfile.module.css'


export const StarshipList = ({  }) => { 
    const {starships } = useContext(CharacterContext)

    return (
        <>
            {
                <div className={styles.listSection}> 
                <h2 className={styles.listTitle}>Starships Flown</h2>
                    <ol>
                        {
                        starships.length > 0 ?
                            starships.map(ship => {
                            return<ol> 
                                    <li key={ship.name}>{ship.name}</li>
                                    <ol class={styles.aboutList}>
                                        <li>Class: {ship.starship_class}</li>
                                        <li>HyperDrive Rating: {ship.starship_class}</li>
                                    </ol>
                                </ol>
                        })
                        : <li>`Not a fan of flying`</li>
                        }
                    </ol>
                </div>
            }
        </>
    )
}

export default StarshipList