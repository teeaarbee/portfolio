require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Welcome to TRB`,
    siteTitleAlt: `Welcome to TRB | Professional Video Editor. Blogger. Memer`,
    siteHeadline: `Welcome to TRB | Professional Video Editor. Blogger. Memer`,
    siteUrl: `https://www.teeaarbee.com/`,
    siteDescription: `Hi, I'm a professional video editor and known as TRB in the world on internet. Visit my site and see my work.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@teeaarbee`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Welcome to TRB | Professional Video Editor. Blogger. Memer`,
        short_name: `TRB`,
        description: `Hi, I'm a professional video editor and known as TRB in the world on internet. Visit my site and see my work.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
