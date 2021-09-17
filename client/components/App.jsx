import React, {useEffect} from 'react'


// Importing API calls
import { getData } from '../api'

function App () {



  useEffect(() => {
    getData()
    .then(res => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err.message)
    })
  }, [])

  return (
    <>
      <div className='app'>

        <div className='header-container'>
          <h1 className='header'>Pokédex</h1>
        </div>

        <div className='search-container'>
          <input 
            className='search'
            type='text'
            placeholder='Enter Pokemon name...'></input>
        </div>

        <div className='btn-container'>
          <button className='btn-search'>Search</button>
          <button className='btn-random'>Random</button>
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