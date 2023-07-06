import {useState} from 'react';

function PigCard({hog}) {
    const [isVisible, setIsVisible] = useState(false)

    return(
        <div  
            onClick={() => setIsVisible(!isVisible)}
            className="ui four wide column">
                <div className="pigTile">
                    <h1 className="headerText">{hog.name}</h1>
                    <img style={{width: "100%"}} src={hog.image} alt={hog.name} />
                    <div style={{
                        visibility: isVisible ? "visible" : "hidden"
                    }}> 
                        <p className="hoggyText">{`Specialty: ${hog.specialty}`}</p>
                        <p className="hoggyText">{`Weight: ${hog.weight}`}</p>
                        <p className="hoggyText">{`Greased: ${hog.greased}`}</p>
                        <p className="hoggyText">{`Highest Medal Achieved: ${hog["highest medal achieved"]}`}</p>
                    </div> 
                </div>
            </div>
    )
}

export default PigCard;