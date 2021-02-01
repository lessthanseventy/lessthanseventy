import React from 'react'
import Img from 'gatsby-image'
import { AiOutlineDown } from '@react-icons/all-files/ai/AiOutlineDown'

import styles from './hero.module.scss'

export default ({ data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
      fadeIn={false}
    />
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
        bottom: '3rem',
        animation: 'bounce 2s infinite',
      }}
      color="white"
    />
  </div>
)
