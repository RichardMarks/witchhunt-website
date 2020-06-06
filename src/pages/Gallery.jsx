import React from 'react'

import Page from 'components/Page'

const Paragraph = ({ children }) => (
  <p className='Paragraph'>{children}</p>
)

const Gallery = () => {
  return (
    <Page>
      <React.Fragment>
        <h2 className='CenteredText'>Gallery:</h2>
        <Paragraph>
          ! The gallery is down until the cross-platform version is released.
          Sorry for the inconvenience. Don't worry, WiTCHHUNTX will be finished soon enough. Just come back here in a few months.
        </Paragraph>
      </React.Fragment>
    </Page>
  )
}

export default Gallery
