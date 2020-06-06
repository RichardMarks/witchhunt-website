import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import News from 'pages/News'
import About from 'pages/About'
import Downloads from 'pages/Downloads'
import Credits from 'pages/Credits'
import Links from 'pages/Links'
import Gallery from 'pages/Gallery'
import NotFound from 'pages/NotFound'

import * as serviceWorker from './serviceWorker'

import './index.css'

const App = () => (
  <Router basename='/witchhunt'>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/news'>
        <News />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/downloads'>
        <Downloads />
      </Route>
      <Route exact path='/credits'>
        <Credits />
      </Route>
      <Route exact path='/links'>
        <Links />
      </Route>
      <Route exact path='/gallery'>
        <Gallery />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  </Router>
)

const boot = () => {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

document.addEventListener('DOMContentLoaded', boot, false)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
