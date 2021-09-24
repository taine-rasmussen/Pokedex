import React, { useState } from 'react';

const Results = ({data}) => {


    // Converts weight data for pokemon to kg
    const convertWeight = () => {

      const [weight, setWeight] = useState('')



        // weight comes through as 60 should be 6.0kg / 4600 should be 460.0kg
        // Func insterts decimal point to left of last 0 on data.weight
        // Pokemon without without weith ending in 0 364 should be 36.4kg
      }

    return(
        <>
            <div className="results-container">
                <div className="results-profile-container">
                    {data.sprites ? (<img src={data.sprites.front_default} className='results-profile-img' alt={data.name} />) : (null)}
                    <div className="results-profile-info">
                        <h3><strong className="italic">Name:</strong> {data.name}</h3> 
                        <h3><strong className="italic">Weight:</strong>  {data.weight}</h3>
                        <h3><strong className="italic">Height:</strong>  {data.height}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Results