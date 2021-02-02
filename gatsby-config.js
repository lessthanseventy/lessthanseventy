require('dotenv').config({
  path: `.env`,
})

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

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
        accessToken: 'NgFm9Vc97HE7K50N5MHexYutzMoyuSVSgeg6QzkoKYs',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
  ],
}
