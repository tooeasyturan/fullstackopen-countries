import React from 'react'

const CountryInfo = ({ country }) => {
  const languages = country.languages.map(language => <li>{language.name}</li>)
  console.log(country.flag)

  return (
    <>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages Spoken:</h3>
      <p>{languages}</p>
      <img src={country.flag} alt='Flag' width='200px'></img>
    </>
  )
}

export default CountryInfo