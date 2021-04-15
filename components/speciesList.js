import React, { useContext } from "react"
import { CharacterContext } from "./characterProvider"
import styles from '../styles/search.module.css'



export const SpeciesList = ({  }) => { 
    const {species } = useContext(CharacterContext)

    return (
        <>
            {
                species.length > 0 ?
                    species.map(species => {
                        return <li key={species._id}>Species: {species.classification}</li>
                    })
                : `No species info found.`
            }
        </>
    )
}

export default SpeciesList