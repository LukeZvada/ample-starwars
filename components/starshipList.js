import React, { useContext } from "react"
import { CharacterContext } from "./characterProvider"
import styles from '../styles/characterProfile.module.css'


export const StarshipList = ({  }) => { 
    const {starships } = useContext(CharacterContext)
    
    //basic component to handle looping through returned starship data and returning just the ship's name
    return (
        <>
            {
                <div className={styles.listSection}> 
                <h2 className={styles.listTitle}>Starships Flown</h2>
                    <ol>
                        {
                        starships.length > 0 ?
                            starships.map(ship => {
                            return <li key={ship.name}>{ship.name}</li>
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