import Display from "./Display";
import React, {useState} from 'react';

function FilterData( {hogData} ) {
    const [isGreased, setIsGreased] = useState(false)
    const [isAlphabetical, setIsAlphabetical] = useState(false)

    const newData = hogData.filter(hog => {
        if (!isGreased) return true
        else return hog.greased
    })

    const sortedNewData = newData.sort((a,b) => {
        if (isAlphabetical) {
            return a.name.localeCompare(b.name)
        } else return newData
    })


    return(
        <div>
            <button style={{fontSize: "2em", margin: "1em"}} onClick={() => setIsGreased(!isGreased)}>Filter: {isGreased ? "Greased" : "All"}</button>
            <button style={{fontSize: "2em", margin: "1em"}} onClick={() => setIsAlphabetical(!isAlphabetical)}>Sort Alphabetical: {isAlphabetical ? "Yes" : "No"}</button>
            <Display data={sortedNewData}/>
        </div>
    )
}

export default FilterData;