import React from 'react'
import PigCard from "./PigCard"

function Display({data}) {

    return (
        <div className="ui grid container">
            {data.map( (hog, index) => (
                <PigCard key={index} hog={hog}/>
            ))}
        </div>
    )
}

export default Display;