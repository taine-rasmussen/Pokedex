import React, {useState} from 'react'

// API calls
import { getData, getSingleData } from '../api'


function Search ({input, setInput, setData}) {

    // Calls single Pokemon API GET & updates state with info
    const SinglePokemon = () => {
      getSingleData(input)
      .then(res => {
        setData(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
    }

    // Generates random number <= 151
    let randomNum = Math.floor(Math.random() * 151)

    // Sets input to random number and updates data with result from random pokemon
    const getRandomPokemon = () => {
      setInput(randomNum)
      getSingleData(input)
      .then(res => {
        setData(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
    }

    // Updates input state with text entered into search box
    const handleChange = (e) => {
      setInput(e.target.value)
    }
    // Handles form submit
    const handleSubmit = (e) => {
      e.preventDefault()
    }
    
  return (
    <>
      <div className='search-container'>
        <div className='header-container'>
          <h1 className='header'>Pokédex</h1>
        </div>
          <form onSubmit={(e) => {handleSubmit(e)}} className='search-form'>
            <input type="text" className='search' placeholder='Enter Pokemon here...' onChange={(e) => {handleChange(e)}}/>
            <button className='btn-search' onClick={SinglePokemon}>Search</button>
            <button className='btn-random' onClick={getRandomPokemon}>random</button>
          </form>
      </div>
    </>
  )
}


export default Search