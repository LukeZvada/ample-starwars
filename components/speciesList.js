import React, { useContext } from "react"
import { CharacterContext } from "./characterProvider"


export const SpeciesList = ({  }) => { 
    const {species } = useContext(CharacterContext)

    return (
        <>
            {
                species.length > 0 ?
                    species.map(species => {
                        return <li key={species._id}>Species: {species.classification}</li>
                    })
                : <li>'No species info found.'</li>
            }
        </>
    )
}

export default SpeciesList