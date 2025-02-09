import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `andres-alcaraz`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-NEH44HVWLP",
        head: true,
        pageTransitionDelay: 0,
        defer: false,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-posthog`,
      options: {
        apiKey: "phc_Vfz1HgOOjm0Gg7n8zeV0RWqBDbNPZYAorzViuwtNmca",
        apiHost: "https://us.i.posthog.com",
        head: true,
        isEnabledDevMode: true
      },
    },
  ]
};

require("dotenv").config({
  path: `.env`,
});

export default config;
