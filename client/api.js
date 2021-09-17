import request from 'superagent'


// Gets data for 1000 Pokemon
export function getData () {
  return request
    .get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
    .then(res => res.body)
}