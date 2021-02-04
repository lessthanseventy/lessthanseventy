import React from 'react'
import styles from './footer.module.scss'
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { AiOutlineLinkedin } from '@react-icons/all-files/ai/AiOutlineLinkedin'
import { AiOutlineFacebook } from '@react-icons/all-files/ai/AiOutlineFacebook'
import { VscFilePdf } from '@react-icons/all-files/vsc/VscFilePdf'
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter'
import { SiGatsby } from '@react-icons/all-files/si/SiGatsby'
import Resume from '../assets/Moore_Andrew_Resume.pdf'

export default () => (
  <div className={styles.footerWrapper}>
    <div className={styles.footerLeft}>
      <a href="https://github.com/lessthanseventy">
        <FiGithub
          className={styles.footerIcon}
          style={{
            height: 40,
            width: 40,
            margin: '0 .5rem 0 2rem',
          }}
        />
      </a>
      <a href="https://linkedin.com/in/lessthanseventy">
        <AiOutlineLinkedin
          className={styles.footerIcon}
          style={{
            height: 40,
            width: 40,
            margin: '0 .5rem',
          }}
        />
      </a>
      <a href="https://twitter.com/lessthanseventy">
        <FiTwitter
          className={styles.footerIcon}
          style={{
            height: 40,
            width: 40,
            margin: '0 .5rem',
          }}
        />
      </a>
      <a href="https://twitter.com/lessthanseventy">
        <AiOutlineFacebook
          className={styles.footerIcon}
          style={{
            height: 40,
            width: 40,
            margin: '0 .5rem',
          }}
        />
      </a>
      <a href={Resume}>
        <VscFilePdf
          className={styles.footerIcon}
          style={{
            height: 40,
            width: 40,
            margin: '0 .5rem',
          }}
        />
      </a>
    </div>
    <div className={styles.footerRight}>
      <span>Built by Andrew Moore | Powered by: </span>
      <a href="https://www.gatsbyjs.com/">
        <SiGatsby
          className={styles.footerIcon}
          style={{
            height: 40,
            width: 40,
            margin: '0 .5rem',
          }}
        />
      </a>
    </div>
  </div>
)
