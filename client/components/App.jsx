import React from 'react'


function App () {

  return (
    <>
      <div className='app'>

        <div className='poke-header-container'>
          <h1 className='poke-header'>Pokedex</h1>
        </div>

        <div className='poke-search-container'>
          <input className='poke-search'></input>
        </div>

        <div className='poke-btn-container'>
          <button className='poke-btn-search'>Search</button>
          <button className='poke-btn-random'>Random</button>
        </div>
      </div>
    </>
  )
}

export default App









// MVP
// Set landing page with react components - no routing needed
// default page large search space (eg google) that prompts the search for a pokemon - sends get request to api and fills page with information
// next to search btn will be a random btn that will generate random pokemon on screen
// Ability to clear or search again