import request from 'superagent'

// Gets data for 151 Pokemon
export function getData () {
  return request
    .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then(res => res.body)
}

// Gets data for pokemon === to input
export function getSingleData (input) {
  return request
    .get(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then(res => res.body)
}
