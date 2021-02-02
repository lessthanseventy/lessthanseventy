import React from 'react'
import styles from './article-list.module.scss'
import ArticlePreview from './article-preview'

const ArticleList = ({ data }) => (
  <div className="wrapper">
    <h2 className="section-headline">Recent articles</h2>
    <ul className="article-list">
      {data.map(({ node }) => {
        return (
          <li key={node.slug}>
            <ArticlePreview article={node} />
          </li>
        )
      })}
    </ul>
  </div>
)

export default ArticleList
