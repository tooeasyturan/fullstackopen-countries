import React from 'react'
import CountryInfo from './CountryInfo'

const Countries = ({ countries, searched }) => {

  let showSearched = countries.filter(country => {
    return country.name.toUpperCase().includes(searched.toUpperCase())
  })

  const searchedCountry = showSearched.map(searchedCountry => <p>{searchedCountry.name}</p>)



  if (searched < 1) {
    return (
      <></>
    )
  }

  if (showSearched.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  }

  if (showSearched.length === 1) {
    return (
      <CountryInfo country={showSearched[0]} />
    )
  }

  else {
    return (
      <div>
        {searchedCountry}
      </div>
    )
  }
}

export default Countries

