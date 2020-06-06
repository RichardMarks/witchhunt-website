import React from 'react'

import Page from 'components/Page'

const externalLinks = [
  {
    id: '540bb853-5a05-4094-a798-ee71a6a7bb18',
    name: 'CCPS Solutions',
    href: 'http://www.ccpssolutions.com',
    desc: 'We have your solution.'
  },
  {
    id: '7c1e6c56-d214-4653-8cb3-7570924e0aad',
    name: 'ShadowLand',
    href: 'http://www.shadowland.cc',
    desc: 'The personal page of Jeff Stagg. His many projects can be found on this site. Check them out!'
  },
  {
    id: '86811bed-37b8-4490-af2f-05931b54d66d',
    name: 'RPGDX',
    href: 'http://rpgdx.net',
    desc: 'RPGDX stands for RPG (Role Playing Game) Development X (just to make it sound more funky). RPGDX is a site, like Madmonkey and Allegro.cc, in which that it allows independent video game developers a spot at which to show off their work for other people to download. And it\'s more than that.'
  }
]

const ExternalLink = ({ name, href, desc }) => (
  <li>
    <a href={href} target='_blank' rel='noopener noreferrer'>{name}</a>
    <small>{href}</small><br /> ~ {desc}
  </li>
)

const Links = () => {
  return (
    <Page>
      <React.Fragment>
        <h2 className='CenteredText'>Links:</h2>
        <ul className='DownloadList'>
          {externalLinks.map(({ id, href, desc, name }) => (<ExternalLink key={id} href={href} desc={desc} name={name} />))}
        </ul>
      </React.Fragment>
    </Page>
  )
}

export default Links
