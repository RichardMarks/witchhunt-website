import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <React.Fragment>
      <div id='NavBar'>
        <ul>
          <li class='News'><Link to='/news'>News</Link></li>
          <li class='About'><Link to='/about'>About</Link></li>
          <li class='Downloads'><Link to='/downloads'>Downloads</Link></li>
          <li class='Credits'><Link to='/credits'>Credits</Link></li>
          <li class='Links'><Link to='/links'>Links</Link></li>
          <li class='Gallery'><Link to='/gallery'>Gallery</Link></li>
        </ul>
        <p style={{ clear: 'both' }} />
      </div>
    </React.Fragment>
  )
}

export default Navigation
