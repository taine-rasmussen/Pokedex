import React from 'react';

const Results = ({data}) => {

    return(
        <>
            <div className="results-container">
                <div className="results-profile-container">

                        {data.sprites ? (<img src={data.sprites.front_default} className='results-profile-img' alt={data.name} />) : (null)}

                    <div className="results-profile-info">
                        <h3>Name: {data.name}</h3> 
                        <h3>Weight: {data.weight}</h3>
                        <h3>Height: {data.height}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Results