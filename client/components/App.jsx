import React, {useEffect, useState} from 'react'
import request from 'superagent'

// Importing API calls
import { getData } from '../api'

function App () {

  // Stores all Pokemon data on load
  const [data, setData] = useState('data')
  //  Stores info from pokemon profile to be displayed
  const [profile, setProfile] = useState({
    type: ''
  })
  // Stores input text
  const [input, setInput] = useState('input')
  // Stores data used to display on screen
  const [display, setDisplay] = useState('display')

    // API call for single pokemon data
    function getSingleData () {
      return request
        .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(res => res.body)
    }

    // Calls single Pokemon API GET & updates state with info
    const SinglePokemon = () => {
      getSingleData()
      .then(res => {
        setData(res), setDisplay(input)
      })
      .catch((err) => {
        console.error(err.message)
      })
    }

    const randomPokemon = () => {

      let random = Math.floor(Math.random() * 151);

      setInput(random)
      
      getSingleData()
      .then(res => {
        setData(res)
      })
      .catch((err) => {
        console.error(err.message)
      })



      // gets random number between 1 & 150
      // Updates input to that number
      // call singlePokemon Func
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
            <button className='btn-search' onClick={SinglePokemon}>Search</button>
            <button className='btn-random' onClick={randomPokemon}>random</button>
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