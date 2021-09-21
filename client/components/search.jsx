import React, {useEffect, useState} from 'react'

// Importing API calls
import { getData, getSingleData } from '../api'

function Search () {

  // Stores all Pokemon data on load
  const [data, setData] = useState('data')
  // Stores input text
  const [input, setInput] = useState('input')

    // Calls single Pokemon API GET & updates state with info
    const SinglePokemon = () => {
      getSingleData(input)
      .then(res => {
        setData(res), setDisplay(input)
      })
      .catch((err) => {
        console.error(err.message)
      })
    }

    // https://gist.github.com/octalmage/6936761
    // In space below search box and btns add a pokemon animation that is conditionaly rendering to flip to profile of pokemon searched once data has been returned from Get request - created two different components so its cleaner


    const randomPokemon = () => {

      let random = Math.floor(Math.random() * 151);
      setInput(random)

      getSingleData(input)
      .then(res => {
        setData(res)
      })
      .catch((err) => {
        console.error(err.message)
      })
      // get random number between 1 & 150
      // Updatesinput to that number
      // call singlePokemon Func
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
            <button className='btn-random' onClick={randomPokemon}>random</button>
          </form>

            <h3>Name: {data.name}</h3> 
            <h3>Weight: {data.weight}</h3>
            <h3>Height: {data.height}cm</h3>
            {data.sprites ? (<img src={data.sprites.front_default} className='single-img' alt={data.name} />) : (null)}
      </div>
    </>
  )
}


export default Search