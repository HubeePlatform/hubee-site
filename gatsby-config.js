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
    description: `Hubee Platform.`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      // `features`,
      // `pricing`,
      // `call-to-action`,
      `screenshots`,
      // `testimonials`,
    ],

    /* Configure the navigation menu */
    menuItems: [
      // { path: "features", label: "Recursos" },
      // { path: "pricing", label: "Pricing" },
      { path: "screenshots", label: "Screenshots" },
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
    logo: `/images/hubee-logo.png`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/hubee-logo.png`,
      text: `This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.`,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `Av. Pref. Hércules Pereira Hortal, 1367, SL 02 – Centro`,
      line2: `Bebedouro – SP`,
      line3: `Cep: 14701-210`,
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
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-smoothscroll`,
    `react-scrollspy`,
  ],
}
