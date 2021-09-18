import React, {useEffect, useState} from 'react'

// Importing API calls
import { getData } from '../api'

function App () {

  // Used to store all Pokemon data
  const [data, setData] = useState('')

  // Stores input text
  const [input, setInput] = useState('')

  // Gets data on load
  useEffect(() => {
    getData()
    .then(res => {
      setData(res)
    })
    .catch((err) => {
      console.error(err.message)
    })
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  const handleChange = (e) => {
    e.preventDefault()
    console.log(input)
  }


  return (
    <>
      <div className='app'>

        <div className='header-container'>
          <h1 className='header'>Pokédex</h1>
        </div>

        <div className='search-container'>
          <form onSubmit={(e) => handleSubmit(e)}>
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