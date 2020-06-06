import React from 'react'

const Navigation = () => {
  return (
    <React.Fragment>
      <div id='NavBar'>
        <ul>
          <li class='News'><a href='/news'>News</a></li>
          <li class='About'><a href='/about'>About</a></li>
          <li class='Downloads'><a href='/downloads'>Downloads</a></li>
          <li class='Credits'><a href='/credits'>Credits</a></li>
          <li class='Links'><a href='/links'>Links</a></li>
          <li class='Gallery'><a href='/gallery'>Gallery</a></li>
        </ul>
        <p style={{ clear: 'both' }} />
      </div>
    </React.Fragment>
  )
}

export default Navigation
