import React, {useEffect, useState} from 'react'
import request from 'superagent'


// Importing API calls
import { getData } from '../api'

function App () {

  // Used to store all Pokemon data
  const [data, setData] = useState('')

  // Stores input text
  const [input, setInput] = useState('')
  const [display, setDisplay] = useState('')


  // Pull all pokemon from data 
  // Have search map data results instead of another get request

  // Gets all data on load
  useEffect(() => {
    getData()
    .then(res => {
      setData(res)
    })
    .catch((err) => {
      console.error(err.message)
    })
  }, [])

  // Gets all data from get request
  const pokeData = data.results

  // Gets arrays stored inside     
  const singlePoke = pokeData ? pokeData[0] : []

  console.log(pokeData)




  return (
    <>
      <div className='app'>

        <div className='header-container'>
          <h1 className='header'>Pokédex</h1>
        </div>

        <div className='search-container'>
          <form>
            <input 
              className='search'
              type='text'
              placeholder='Enter Pokemon name...'
              value={input}
              onChange={(e) => handleChange(e)}>
            </input>
          </form>
        </div>

        <div className='btn-container'>
          <button className='btn-search'>Search</button>
          <button className='btn-random'>Random</button>
        </div>

        <h3>{display}</h3>
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