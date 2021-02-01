import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Card, Text } from '@geist-ui/react'

import styles from './article-preview.module.scss'

export default ({ article }) => (
  <Card width="360px" className={styles.card} shadow>
    <Link to={`/blog/${article.slug}`}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.previewTitle}>{article.title}</h3>
      </div>
      <Img alt="" fluid={article.heroImage.fluid} />
    </Link>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    <Card.Footer>
      <small>{article.publishDate}</small>
    </Card.Footer>
  </Card>
)
