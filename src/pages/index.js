import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { Grid, Card } from '@geist-ui/react'
import Img from 'gatsby-image'
import MyFace from '../assets/my_face.jpeg'
import Bojack from '../assets/bojack.png'
import styles from './index.module.scss'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ContactForm from '../components/contact-form'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div className={styles.mainWrapper}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <Card shadow className={styles.indexCard}>
            <img className={styles.myFace} alt="My Face" src={MyFace} />
            <div className={styles.indexCardTextWrapper}>
              <p>
                As it says up there 🠕 my name is Andrew, and I like to make
                things. Would you believe that this site was made by someone who
                is severely visually impaired? If so... ouch. If not... thanks!
                😊
              </p>
              <p>
                Please check out my blog. I am deeply passionate about
                accessible design both on and offline. A site or web app that is
                accessible for people with varying disabilities is better not
                just for those individuals, but for everyone. Not every website
                that is good is accessible, but every website that is accessible
                is good.
              </p>
              <p>
                If you like what you see and you would like to work together or
                have questions regarding how to make your site more accessible
                send me a message below. My resumé is also available in the
                footer, along with my github and other social media contacts.
              </p>
            </div>
          </Card>
          <div className={styles.bottomWrapper}>
            <img className={styles.bojack} src={Bojack} />
            <ContactForm />
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 385, maxHeight: 215, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
