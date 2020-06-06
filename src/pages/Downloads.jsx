import React from 'react'

import Page from 'components/Page'

const downloads = [
  {
    id: 'ee81458e-011a-4c8b-b631-ecbebaf1f177',
    href: 'http://www.ccpssolutions.com/witchhunt/releases/WHDemo03-18-2007_052742.exe',
    desc: 'Download WiTCHHUNT for Windows'
  },
  {
    id: 'ddc32fb2-3324-477e-9fec-c387c2ffccdf',
    href: 'http://www.ccpssolutions.com/witchhunt/releases/witchhunt_final_src_gnugpl_release_1-15-2008.zip',
    desc: 'Download Source GNU GPL (.ZIP Format)'
  },
  {
    id: '3a1ed29d-800c-4970-b234-ff7220592684',
    href: 'http://www.ccpssolutions.com/witchhunt/releases/witchhunt_final_src_gnugpl_release_1-15-2008.7z',
    desc: 'Download Source GNU GPL (.7z Format)'
  },
  {
    id: 'eaf4d035-7d0b-4740-82e4-cb95ff539b17',
    href: 'http://www.ccpssolutions.com/witchhunt/releases/witchhunt_final_src_gnugpl_release_2-12-2008.zip',
    desc: 'Download Source GNU GPL for Visual C++ 2008 Express (.ZIP Format)'
  },
  {
    id: '40185a6e-1fc7-4015-8eb6-884639dff973',
    href: 'http://www.ccpssolutions.com/witchhunt/releases/witchhunt_final_src_gnugpl_release_2-12-2008.7z',
    desc: 'Download Source GNU GPL for Visual C++ 2008 Express (.7z Format)'
  },
  {
    id: 'dbd5eade-4895-4a00-9108-549512ed8799',
    href: 'http://www.gnu.org/licenses/old-licenses/gpl-2.0.html',
    desc: 'GNU GENERAL PUBLIC LICENSE Version 2.0'
  }
]

const DownloadLink = ({ href, desc }) => (
  <li>
    <a href={href} target='_blank' rel='noopener noreferrer'>{desc}</a>
  </li>
)

const Downloads = () => {
  return (
    <Page>
      <React.Fragment>
        <h2 className='CenteredText'>Downloads:</h2>
        <ul className='DownloadList'>
          {downloads.map(({ id, href, desc }) => (<DownloadLink key={id} href={href} desc={desc} />))}
        </ul>
      </React.Fragment>
    </Page>
  )
}

export default Downloads
