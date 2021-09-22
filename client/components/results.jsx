import React from 'react';

const Results = ({data}) => {

    return(
        <>
            <h3>Name: {data.name}</h3> 
            <h3>Weight: {data.weight}</h3>
            <h3>Height: {data.height}</h3>
            {data.sprites ? (<img src={data.sprites.front_default} className='single-img' alt={data.name} />) : (null)}
        </>
    )
}


export default Results