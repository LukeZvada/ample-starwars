import React, { useContext } from "react"
import { CharacterContext } from "./characterProvider"


export const SpeciesList = ({  }) => { 
    const { species } = useContext(CharacterContext)

    //basic component to handle looping through returned species data and returning just the classification
    return (
        <>
            {
                species.length > 0 ?
                    species.map(species => {
                        return <li key={species.url}>Species: {species.classification}</li>
                    })
                : <li>'No species info found.'</li>
            }
        </>
    )
}

export default SpeciesList