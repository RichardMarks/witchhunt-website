import React from 'react'

import Page from 'components/Page'

const Paragraph = ({ children }) => (
  <p className='Paragraph'>{children}</p>
)

const NotFound = () => {
  return (
    <Page>
      <React.Fragment>
        <h2>404 Not Found</h2>
        <Paragraph>
          It seems you are stumbling around in the dark. <a href='/'>Go Home</a> to find what you are looking for.
        </Paragraph>
      </React.Fragment>
    </Page>
  )
}

export default NotFound
