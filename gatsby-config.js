module.exports = {
  siteMetadata: {
    title: `Christmas Movie Database`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
  ]
};