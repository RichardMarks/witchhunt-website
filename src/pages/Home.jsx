import React from 'react'

import Page from 'components/Page'

const Paragraph = ({ children }) => (
  <p className='Paragraph'>{children}</p>
)

const Home = () => {
  return (
    <Page>
      <React.Fragment>
        <Paragraph>
          A once peaceful land, now corrupted and plagued by great evils.
          Enter this world if you dare....
        </Paragraph>
      </React.Fragment>
    </Page>
  )
}

export default Home
