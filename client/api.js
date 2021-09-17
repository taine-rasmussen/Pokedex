import request from 'superagent'


// Gets data for 1000 Pokemon
export function getData () {
  return request
    .get(`https://app.pokemon-api.xyz/pokemon/all`)
    .then(res => res.body)
}