import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Countries from './components/Countries'


const App = () => {
  const [countries, setCountries] = useState([])
  //const [newCountry, setNewCountry] = useState('')
  const [searched, setSearched] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const handleSearch = (event) => {
    setSearched(event.target.value)
  }

  const showCountryButtonHandler = (event) => {
    setSearched(event.target.attributes.country.value)
  }


  return (
    <div>
      <Search handleSearch={handleSearch} searched={searched} />
      <Countries countries={countries} searched={searched} buttonHandler={showCountryButtonHandler} />
    </div>
  );
}

export default App;
