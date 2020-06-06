import React from 'react'

import Page from 'components/Page'

const Credits = () => {
  return (
    <Page>
      <React.Fragment>
        <h2 className='CenteredText'>Credits:</h2>
        <ul class='MovieCredits'>
          <li><strong>Design</strong><br />Richard Marks, Rafael Hermosillo</li>
          <li><strong>Story</strong><br />Richard Marks, Rafael Hermosillo</li>
          <li><strong>Artwork</strong><br />Richard Marks</li>
          <li><strong>Programming</strong><br />Richard Marks, Rafael Hermosillo</li>
          <li><strong>Website</strong><br />Jeff Stagg, Richard Marks</li>
        </ul>
      </React.Fragment>
    </Page>
  )
}

export default Credits
