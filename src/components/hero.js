import React from 'react'
import Img from 'gatsby-image'
import { AiOutlineDown } from '@react-icons/all-files/ai/AiOutlineDown'

import styles from './hero.module.scss'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.heroDetails}>
      <h2 className={styles.heroHeadline}>{data.name}</h2>
      <h4 className={styles.heroTitle}>{data.title}</h4>
      <p>{data.shortBio.shortBio}</p>
    </div>
    <AiOutlineDown
      style={{
        height: 40,
        width: 40,
        position: 'absolute',
        bottom: '1rem',
      }}
      color="white"
    />
  </div>
)
