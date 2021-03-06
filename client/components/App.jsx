import React, {  useState } from 'react'

// components
import Search from './search'
import Results from './results'
import PreResults from './preresults'

function App () {

   // Stores Pokemon data on load
   const [data, setData] = useState('data')
   // Stores input text - starts as random num in case first action on page is the random pokemon btn
   const [input, setInput] = useState(Math.floor(Math.random() * 151))

  return (
    <>
      <div className="app-container">
        <div className="search-component">
          <Search input={input} setInput={setInput} data={data} setData={setData}/>
        </div>
        <div className="results-component">
          {data.sprites ? <Results data={data}/> : <PreResults />}
        </div>
      </div>
    </>
  )
}

export default App

// MVP
// default page large search space (eg google) that prompts the search for a pokemon - sends get request to api and fills page with information
// next to search btn will be a random btn that will generate random pokemon on screen
// Ability to clear or search again