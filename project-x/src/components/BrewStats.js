import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Graph from './Graph'

const BrewStats = () => {
  const [beerInfo, setBeerInfo] = useState([])
  const [filterBeer, setFilterBeer] = useState(beerInfo)

  const hook = () => {
    console.log('effect')
    axios
      .get('https://api.punkapi.com/v2/beers')
      .then(response => {
        console.log('promise fulfilled')
        setBeerInfo(response.data)
      })
  }

  useEffect(hook, [])

  const filter = (event) => {

    const filter = () => beerInfo.filter((ele) => {
      return ele.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFilterBeer('')
    setFilterBeer((filter()))
  }
  const Display = () => {
    if (filterBeer.length > 10) {
      return <li>Please Search for your Beer</li>
    } else if (filterBeer.length < 10 && filterBeer.length > 1) {
      return filterBeer.map((ele, i) => {
        return <li key={i} onClick={(e) => onClick(e, ele)}>{ele.name}</li>
      })
    } else if (filterBeer.length === 1) {
      return (
        <div className="columns">
          <div className="column is-horizontal-center">
            <img src={filterBeer[0].image_url} alt="flag" height="100" width="100"></img>
          </div>
          <div className="column">
            <h2>{filterBeer[0].name}</h2>
            <h4>Beer Tagline :</h4>
            <p>{filterBeer[0].tagline}</p>
            <h4>Beer Description:</h4>
            <p>{filterBeer[0].description}</p>
            <h4>Beer abv: </h4>
            <p>{filterBeer[0].abv}</p>
          </div>
          <div className="column">
            <h2>Food Pairing</h2>
            <Graph />
          </div>
        </div>

      )
    } else {
      return <li>Please filter results</li>
    }
  }
 
  return (

    <div>
      <div className='beers'>
        <h1>Brewers Guide to BrewDog Beers</h1>
        <h3>Find your beer</h3>
        <div className='inputBox'>
          <input placeholder='Search' onChange={filter} className='inputeValue'></input>
        </div>
        <Display />

      </div>

    </div>
  )


}

export default BrewStats



