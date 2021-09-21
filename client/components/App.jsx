import React, {useEffect, useState} from 'react'
import request from 'superagent'

// Importing API calls
import { getData } from '../api'

function App () {

  // Stores all Pokemon data
  const [data, setData] = useState('')
  // Stores single Pokemon data
  const [singleData, setSingleData] = useState('')
  // Stores input text
  const [input, setInput] = useState('')
  // Stores data used to display on screen
  const [display, setDisplay] = useState('')
  // stores Pokemon API URl used to get singleData
  const [pokeUrl, setPokeUrl] = useState('')


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

  // Gets data for single Pokemon name and API url   
  let singlePokeName = pokeData ? pokeData[0].name : []
  let singlePokeUrl = pokeData ? pokeData[0].url : []


  // API call for single pokemon data
  function getSingleData () {
    return request
      .get({pokeUrl})
      .then(res => res.body)
  }

  // Calls single Pokemon API GET & updates state with info
  const SinglePokemon = () => {
    getSingleData()
    .then(res => {
      setSingleData(res)
    })
    .catch((err) => {
      console.error(err.message)
    })
  }
 
  // need to get url to be used in single GET request

  console.log(singlePokeUrl)

  const getSinglePokeUrl = (e) => {
    e.preventDefault()

    setPokeUrl({singlePokeUrl})
    setDisplay({singlePokeName})

    console.log('onClick working, url is:', singlePokeUrl)
  }

    // Updates input state with text entered into search box
    const handleChange = (e) => {
      setInput(e.target.value)
      // console.log(input)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
    }
    

  return (
    <>
      <div className='app'>
        <div className='header-container'>
          <h1 className='header'>Pokédex</h1>
        </div>
          <form onSubmit={(e) => {handleSubmit(e)}}>
            <input 
              type="text"
              className='search'
              placeholder='Enter Pokemon here...'
              onChange={(e) => {handleChange(e)}}
            />
            <button className='btn-search' onClick={getSinglePokeUrl}>Search</button>
            <button className='btn-random'>Random</button>
          </form>
        {/* <h3>{display}</h3> */} 
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