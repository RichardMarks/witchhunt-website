import React from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Page = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div id='Content'>
        {children}
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Page
