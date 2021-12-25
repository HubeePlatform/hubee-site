/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Hubee`,
    author: {
      name: ``,
    },
    description: `Hubee Tech`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      // `pricing`,
      // `call-to-action`,
      // `screenshots`,
      // `testimonials`,
    ],

    /* Configure the navigation menu */
    menuItems: [
      { path: "features", label: "Recursos" },
      // { path: "pricing", label: "Pricing" },
      // { path: "screenshots", label: "Imagens" },
      // { path: "testimonials", label: "Testimonials" },
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      {
        service: `GitHub`,
        url: `https://github.com/hubeeplatform`,
        fa: `github`,
      },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/hubee-mono.svg`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/hubee-mono.svg`,
      text: ` A perfeita conexão entre plataforma, tecnologia e facilidade de uso para fazer o seu varejo decolar.`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `Av. Pref. Hércules Pereira Hortal, 1367, SL 02 – Centro`,
      line2: `Bebedouro – SP`,
      line3: `CEP: 14701-210`,
    },
    contacts: [
      { text: `(17) 99142-7724`, url: `tel:17991427724` },
      {
        text: `cleiton@varejointeligente.tech`,
        url: `mailto:cleiton@varejointeligente.tech`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-181644392-1',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-zendesk-chat',
      options: {
        zendeskKey: 'f51c4547-5eb5-4a7d-9af3-f16c3a7f700b',
        enableDuringDevelop: true, // Optional. Disables Zendesk chat widget when running Gatsby dev server. Defaults to true.
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/static.js",
      },
    },
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-smoothscroll`,
    `react-scrollspy`,
  ],
}
