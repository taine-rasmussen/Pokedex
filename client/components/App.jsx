import React, {useEffect, useState} from 'react'
import request from 'superagent'

// Importing API calls
import { getData } from '../api'

function App () {

  // Stores all Pokemon data on load
  const [data, setData] = useState('data')
  // Stores single Pokemon data
  const [singleData, setSingleData] = useState('')
  //  Stores info from pokemon profile to be displayed
  const [profile, setProfile] = useState({
    type: ''
  })


  // Stores input text
  const [input, setInput] = useState('input')
  // Stores data used to display on screen
  const [display, setDisplay] = useState('display')


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
    let pokemonName = pokeData ? pokeData[0].name : []
    let pokemonUrl = pokeData ? pokeData[0].url : []


    // Updates single Pokemon object with current name & url
    const updateSingleData = () => {
      setSingleData(pokemonName)    
    }
    
    // Has value of single Pokemon url
    let test = singleData[1]

    // API call for single pokemon data
    function getSingleData () {
      return request
        .get(`https://pokeapi.co/api/v2/pokemon/${singleData}`)
        .then(res => res.body)
    }

    // Calls single Pokemon API GET & updates state with info
    const SinglePokemon = () => {
      getSingleData()
      .then(res => {
        setData(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
    }

    const uhhh = () => {
      SinglePokemon()
    }

    // Updates input state with text entered into search box
    const handleChange = (e) => {
      setInput(e.target.value)
      // console.log(input)
    }

    // Handles form submit
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
            <button className='btn-search' onClick={updateSingleData}>Search</button>
            <button className='btn-random' onClick={SinglePokemon}>get data</button>
          </form>
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