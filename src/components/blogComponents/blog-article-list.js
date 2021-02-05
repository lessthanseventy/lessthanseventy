import React from 'react'
import styles from './blog-article-list.module.scss'
import { Card } from '@geist-ui/react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
export default ({ data }) => (
  <div className={styles.pageWrapper}>
    <h2 className="section-headline">Recent articles</h2>
    <ul className={styles.articleList}>
      {data.map(({ node }, index) => {
        return (
          <li key={node.slug}>
            {index % 2 === 0 && (
              <div
                data-sal="flip-down"
                data-sal-duration="500"
                data-sal-easing="ease-in-cubic"
                className={styles.imageWrapper}
              >
                <Link to={`/blog/${node.slug}`}>
                  <Img alt="" fixed={node.heroImage.fixed} />
                </Link>
              </div>
            )}
            {index % 2 === 1 && (
              <div
                data-sal="slide-left"
                data-sal-duration="500"
                data-sal-easing="ease-out-sine"
                className={styles.imageWrapper}
              >
                <Link to={`/blog/${node.slug}`}>
                  <Img alt="" fixed={node.heroImage.fixed} />
                </Link>
              </div>
            )}
            {index % 2 === 0 && (
              <div
                data-sal="flip-left"
                data-sal-duration="500"
                data-sal-easing="ease-in-cubic"
                className={styles.descWrapper}
              >
                <h3 className={styles.previewTitle}>{node.title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.description.childMarkdownRemark.html,
                  }}
                />
                <small>{node.publishDate}</small>
              </div>
            )}
            {index % 2 === 1 && (
              <div
                data-sal="slide-left"
                data-sal-duration="500"
                data-sal-easing="ease-in-cubic"
                className={styles.descWrapper}
              >
                <h3 className={styles.previewTitle}>{node.title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.description.childMarkdownRemark.html,
                  }}
                />
                <small>{node.publishDate}</small>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  </div>
)
