import React from 'react'
import Weather from './Weather'

const CountryInfo = ({ country, weather }) => {
  const languages = country.languages.map(language => <li>{language.name}</li>)

  return (
    <>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages Spoken:</h3>
      <p>{languages}</p>
      <img src={country.flag} alt='Flag' width='200px'></img>
      <Weather city={country.capital} />
    </>
  )
}

export default CountryInfo