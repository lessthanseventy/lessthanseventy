import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components/layoutComponents/layout'

import styles from './blog-post.module.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    console.log(this.props)
    return (
      <Layout location={this.props.location}>
        <div className={styles.postWrapper}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={styles.hero}>
            <Img
              className={styles.heroImage}
              alt={post.title}
              style={{
                width: '100%',
              }}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="pageWrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              className={styles.thePostBody}
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
          <DiscussionEmbed
            shortname="lessthanseventy"
            config={{ identifier: post.title }}
          />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
