import React from 'react'

import Navigation from 'components/Navigation'

const Header = () => {
  return (
    <React.Fragment>
      <div id='Logo'><a href='/' title='Click to return to the main page'><strong /></a></div>
      <Navigation />
    </React.Fragment>
  )
}

export default Header
