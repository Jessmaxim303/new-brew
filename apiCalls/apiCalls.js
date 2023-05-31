export const fetchStateBreweryApi = async (state) => {
	  let stateUrl = state.replace(" ","_")
	  console.log(stateUrl)
  return await fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
  .then(res => {
    if(!res.ok) {
      throw Error('Failed to retrieve movies.')
    }
    return res.json()})
}