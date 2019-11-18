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
      return <li className='beerList'> Please Search for your Beer</li>
    } else if (filterBeer.length < 10 && filterBeer.length > 1) {
      return filterBeer.map((ele, i) => {
        return <li key={i} className='beerList'>{ele.name}</li>
      })
    } else if (filterBeer.length === 1) {
      const graphbeer = filterBeer[0]
      return (
        <div className="columns is-desktop">
          <div className="column is-horizontal-center" id="leftborder">
            <img src={filterBeer[0].image_url} alt="flag" height="100" width="100"></img>
          </div>
          <div className="column">
            <h2>{filterBeer[0].name}</h2>
            <h4>Method</h4>
            <p>Mash Temp {filterBeer[0].method.mash_temp[0].temp.value} celsius for {filterBeer[0].method.mash_temp[0].duration} minutes</p>
            <p>Fermentation temp {filterBeer[0].method.fermentation.temp.value} celsius</p>
            <h4>Yeast used:</h4>
            <p>{filterBeer[0].ingredients.yeast}</p>
            <h4>Brewers Tips:</h4>
            <p>{filterBeer[0].brewers_tips}</p>
            <h4>Attenuation level:</h4>
            <p>{filterBeer[0].attenuation_level}</p>
          </div>
          <div className="column">
            <h2>Malts used by weight kg/20l</h2><br></br>
            <Graph data2={graphbeer}/>
          </div>
        </div>

      )
    } else {
      return <li className='beerList'>Please filter results</li>
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



