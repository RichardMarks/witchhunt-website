import React from 'react'

import Page from 'components/Page'

const NewsBox = ({ children }) => (
  <div className='NewsBox'>
    {children}
  </div>
)

const NewsDate = ({ children }) => (
  <div className='NewsDate'>
    {children}
  </div>
)

const NewsBody = ({ children }) => (
  <div className='NewsBody'>
    {children}
  </div>
)

const News = () => {
  return (
    <Page>
      <React.Fragment>
        <h2 className='CenteredText'>News: </h2>

        <NewsBox>
          <NewsDate>Posted 10-15-08 by Richard Marks</NewsDate>
          <NewsBody>
            With the vicious server attack behind us, we can now focus on the development of WitchHuntX.<br />
            This new game will be fully cross-platform compatible, available for Windows, and Linux. The game is graphical in nature
            though do not expect tiles and sprites. The game is still based solely on ASCII characters, they are just delivered as
            bitmaps to allow the game to use a smooth scrolling tile engine to increase the appeal.<br />
            <br />Additionally, we are experimenting with using JavaScript for the game's scripting language. This will allow our
            designers and even our players the opportunity to tweak the game's balance as they wish easily and quickly!<br />
            The game environment will also be colored this time, so you should be able to discern what you are looking at more easily.
            Well that is all for this update. I will try to keep you all updated...OH! before I forget.<br />
            We have made available a public google group page where you can post bug reports, questions, suggestions, etc.<br />
            <br />Go here: <a href='http://groups.google.com/group/witchhunt'>The WitchHunt Google Group Site</a><br /><br />
          </NewsBody>
        </NewsBox>

        <NewsBox>
          <NewsDate>Posted 01-15-08 by Richard Marks</NewsDate>
          <NewsBody>Many have asked for it, and now its here! No, not WiTCHHUNTX. Not yet at least. But The source to WiTCHHUNT has been released under the terms of the GNU GENERAL PUBLIC LICENSE. Go to the downloads section now.</NewsBody>
        </NewsBox>

        <NewsBox>
          <NewsDate>Posted 10-04-07 by Richard Marks</NewsDate>
          <NewsBody>
          Due to the high demands of the community, WiTCHHUNTX - The cross-platform version of WiTCHHUNT is currently being developed and is scheduled to be released mid April 2008!
          You can expect better controls, better gameplay, and more story in this all-new Dawn of the Blood..</NewsBody>
        </NewsBox>

        <NewsBox>
          <NewsDate>Posted 03-18-07 by Richard Marks</NewsDate>
          <NewsBody>Well, WiTCHHUNT is out! Hope everyone Enjoys it!</NewsBody>
        </NewsBox>

      </React.Fragment>
    </Page>
  )
}

export default News
