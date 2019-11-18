import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'
import Home from './components/home'
import Beers from './components/Beers'
import Brewstats from './components/BrewStats'
import Bulma from 'bulma'
import './style.scss'


class App extends React.Component {
  //https://api.punkapi.com/v2/beers

  render() {
    return (
      <div>
        <Router>
          <div>
            <ul className='nav1'>
              <li>
                <Link to="/project-x/">Home</Link>
              </li>
              <li>
                <Link to="/beers">Beers</Link>
              </li>
              <li>
                <Link to="/brewstats">Brewing Stats</Link>
              </li>
            </ul>


            <Switch>
              <Route exact path="/project-x/">
                <Home />
              </Route>
              <Route path="/beers">
                <Beers />
              </Route>
              <Route path="/brewstats">
                <Brewstats />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)