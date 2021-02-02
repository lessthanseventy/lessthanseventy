require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'lessthanseventy',
  },
  pathPrefix: '/lessthanseventy',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'popyfhidhmvs',
        accessToken: 'qJe28dA7pHGLGqFLZY39MMAfPoLSo9ikUWmy0NZYQq8',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
  ],
}
