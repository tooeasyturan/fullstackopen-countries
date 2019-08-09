import React from 'react'
import CountryInfo from './CountryInfo'


const Countries = ({ countries, searched, buttonHandler }) => {

  let showSearched = countries.filter(country => {
    return country.name.toUpperCase().includes(searched.toUpperCase())
  })

  const rows = () => showSearched.map(searchedCountry => <p>{searchedCountry.name} <button onClick={buttonHandler} country={searchedCountry.name}>View</button></p>)



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
      <>
        <CountryInfo country={showSearched[0]} />
      </>
    )
  }

  else {
    return (
      <div>
        {rows()}
      </div>
    )
  }
}

export default Countries

