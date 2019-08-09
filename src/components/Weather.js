import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Weather = ({ city }) => {
  const [weather, setWeather] = useState('')


  const hook = () => {
    axios
      .get(`http://api.apixu.com/v1/current.json?key=78e50f2d3ff34077aeb90108190908&q=${city}`)
      .then(response => {
        setWeather(response.data.current)
      })
  }

  useEffect(hook, [])

  const temperture = weather.temp_c
  const wind = weather.wind_kph
  const wind_dir = weather.wind_dir
  const icon = weather.condition && weather.condition.icon


  return (
    <div>
      <h3>Weather in {city}</h3>
      <p><strong>Temperature:</strong> {temperture} degrees Celsius</p>
      <img src={icon} alt="icon"></img>
      <p><strong>Wind:</strong> {wind} kph direction {wind_dir}</p>
    </div>
  )
}

export default Weather