/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path');

module.exports = {
  baseUrl: '/',
  favicon: 'img/favicon/favicon.ico',
  title: 'Objectiv: a product analytics pipeline for deep, reusable modelling',
  titleDelimiter: '|',
  tagline: 'Collect high quality data with a standardized taxonomy.\nTake, build on and run advanced models ' 
    +' off the shelf.', //meta description, and og:description
  url: 'https://objectiv.io',
  organizationName: 'objectiv', // Usually your GitHub org/user name.
  projectName: 'objectiv.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  
  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    sidebarCollapsible: true,
    navbar: {
      title: '',
      logo: {
        alt: 'Objectiv Logo',
        src: 'img/logo-objectiv.svg',
      },
      items: [
        {
          to: 'about-us', 
          label: 'About Us', 
          position: 'right'
        },
        {
          href: 'https://github.com/objectiv',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Objectiv`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: false,
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, 'src/plugins/favicons/')],
};
