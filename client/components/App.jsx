import React, {useEffect, useState} from 'react'
import request from 'superagent'


// Importing API calls
import { getData } from '../api'

function App () {

  // Used to store all Pokemon data
  const [data, setData] = useState('')
  const [singleData, setSingleData] = useState('')


  // Stores input text
  const [input, setInput] = useState('')
  const [display, setDisplay] = useState('')

  // stores Pokemon API URl used to get singleData
  const [pokeUrl, setPokeUrl] = useState('')


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
  const singlePoke = pokeData ? pokeData[0].name : []


  function getSingleData () {
    return request
      .get(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then(res => res.body)
  }

  const SinglePokemon = () => {
    getSingleData()
    .then(res => {
      setSingleData(res)
    })
    .catch((err) => {
      console.error(err.message)
    })
  }
  // SinglePokemon()
  // getSingleData()


    const handleChange = (e) => {
      setInput(e.target.value)
      console.log(input)
    }


    // Either way I have to make another get request so instead of all this fancy work trying to find the index why not get just grab the url provided and get that
    // use state "singlePokeUrl" to have it be dynamic




  // Working function that gets all Pokemon
  // Working function that gets data from single Pokemon via num

  // Need to find a way to get num from allData and use that to concatnate into single Pokemon func to return correct info



  return (
    <>
      <div className='app'>

        <div className='header-container'>
          <h1 className='header'>Pokédex</h1>
        </div>

        <div className='search-container'>
          <form >
            <input 
              type="text"
              className='search'
              placeholder='Enter Pokemon here...'
              onChange={(e) => {handleChange(e)}}/>
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