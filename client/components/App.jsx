import React, {  useState } from 'react'


// API calls 
import { getData, getSingleData } from '../api'


// components
import Search from './search'
import Results from './results'
import PreResults from './preresults'

function App () {


   // Stores all Pokemon data on load
   const [data, setData] = useState('data')
   // Stores input text
   const [input, setInput] = useState('input')

   // Pass down state through comps

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


  return (
    <>
    <div className="app-container">
      <div className="search-container">
        <Search />
      </div>
      <div className="results-container">
        {data.sprites ? <Results /> : <PreResults />}
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