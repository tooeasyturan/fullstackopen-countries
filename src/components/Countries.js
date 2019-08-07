import React from 'react'

const Countries = ({ countries, searched }) => {

  let showSearched = countries.filter(country => {
    return country.name.toUpperCase().includes(searched.toUpperCase())
  })

  console.log(showSearched)

  if (searched < 1) {
    return (
      <></>
    )
  }

  if (showSearched.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else {

    const searchedCountry = () => {
      return (
        showSearched.map(searchedCountry => <p>{searchedCountry.name}</p>)
      )
    }


    return (
      <div>
        {searchedCountry()}
      </div>
    )
  }
}

export default Countries