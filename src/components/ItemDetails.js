import React from 'react'
import Weather from './Weather'

const ItemDetails = ({ results }) => {
  return (
    <div>
      <h1>Name: {results[0].name}</h1>
      <div>
        <img src={results[0].flag} alt="Offical flag of {props.name}" />
      </div>
      <br />
      <span>Code: {results[0].alpha3Code}</span>
      <br />
      <span>Capital: {results[0].capital}</span>
      <br />
      <span>Time Zone: {results[0].timezones[0]}</span>
      <br />
      <span>Population: {results[0].population.toLocaleString()}</span>
      <br />
      <h2>Languages:</h2>
      <ul>
        {results[0].languages.map((lang) => (
          <li key={lang.iso639_1}>{lang.name}</li>
        ))}
      </ul>
      <br />

      <Weather capital={results[0].capital} />
    </div>
  )
}

export default ItemDetails
