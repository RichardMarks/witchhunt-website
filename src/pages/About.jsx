import React from 'react'

import Page from 'components/Page'

const Paragraph = ({ children }) => (
  <p className='Paragraph'>{children}</p>
)

const About = () => {
  return (
    <Page>
      <React.Fragment>
        <h2 className='CenteredText'>About:</h2>
        <Paragraph>
        WiTCHHUNT, The Dawn of the Blood.
        Enter the story of an alchemist's life turned upside down as evil pours into the hearts of all he knows...<br /><br />
        Created by the minds of Richard Marks and Rafael Hermosillo, an experience you won't soon forget.
        Developed by Team CCPS, a division of CCPS Solutions.
        </Paragraph>
      </React.Fragment>
    </Page>
  )
}

export default About
