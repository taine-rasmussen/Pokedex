import React, {useState} from 'react'

import { SinglePokemon } from './App'
import { getData, getSingleData } from '../api'


function Search () {


    // In space below search box and btns add a pokemon animation that is conditionaly rendering to flip to profile of pokemon searched once data has been returned from Get request - created two different components so its cleaner




        // Stores all Pokemon data on load
   const [data, setData] = useState('data')
   // Stores input text
   const [input, setInput] = useState('input')

   // Pass down state through comps

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
      <div className='app'>
        <div className='header-container'>
          <h1 className='header'>Pokédex</h1>
        </div>
          <form onSubmit={(e) => {handleSubmit(e)}}>
            <input type="text" className='search' placeholder='Enter Pokemon here...' onChange={(e) => {handleChange(e)}}/>
            <button className='btn-search' onClick={SinglePokemon}>Search</button>
            <button className='btn-random' >random</button>
          </form>
      </div>
    </>
  )
}


export default Search