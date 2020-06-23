/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_TOKEN}&query=${capital}`
      )
      .then((response) => setWeather(response.data))
  }, [])

  if (!weather) {
    return <div>No weather data available for {capital} </div>
  }

  return (
    <div>
      <div>
        <strong>Current Weather in {capital}</strong>

        <br />
        <img
          alt={weather.current.weather_descriptions[0]}
          src={weather.current.weather_icons[0]}
        />
        <br />
        <div>Temperature: {weather.current.temperature} celsius</div>
        <div> Wind Speed: {weather.current.wind_speed} kph</div>
        <div>Wind Direction: {weather.current.wind_dir}</div>

        <br />
      </div>
    </div>
  )
}

export default Weather
