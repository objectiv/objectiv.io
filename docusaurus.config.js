// @ts-check

const path = require('path');
const environment = process.env.OBJECTIV_ENVIRONMENT;
const slackJoinLink = 'https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg';
// TBD: https://github.com/rehypejs/rehype-meta

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  baseUrl: (environment === 'staging') ? '/staging/' : '/',
  url: (environment === 'staging') ? 'https://objectiv.io/staging/' : 'https://objectiv.io/',
  favicon: 'img/favicon/favicon.ico',
  title: 'Objectiv - creating the ultimate iterative workflow for data scientists',
  titleDelimiter: '|',
  tagline: 'Build & orchestrate reusable, stackable and interchangeable models that embrace a standardized ' 
    + ' event taxonomy. Straight from your Jupyter notebook.', //meta description, and og:description
  organizationName: 'objectiv', // Usually your GitHub org/user name.
  projectName: 'objectiv.io', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: false,
  
  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: '',
      hideOnScroll: false,
      logo: {
        alt: 'Objectiv Logo',
        src: 'img/logo-objectiv.svg',
      },
      items: [
        {
          to: 'about',
          label: 'About Us',
          position: 'right',
        },
        {
          href: 'https://github.com/objectiv',
          label: 'GitHub',
          position: 'right',
          className: 'navItem navGitHub',
        },
        {
          href: 'https://twitter.com/objectiv_io',
          label: 'Twitter',
          position: 'right',
          className: 'navItem navTwitter',
        },
        {
          href: 'mailto:hi@objectiv.io',
          label: 'Contact Us',
          position: 'right',
          className: 'navItem navEmail',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Objectiv`,
      links: [
        {
          items: [
            {
              label: 'Privacy Policy',
              to: 'privacy/',
            },
            {
              label: 'Cookies',
              to: 'privacy/cookies',
            },
          ],
        },
      ],
    },
  }),
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: false,
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],
  plugins: [path.resolve(__dirname, 'src/plugins/favicons/')],
  scripts: [
    'https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js',
    {
      src: 'https://consent.cookiebot.com/uc.js?cbid=7498452c-872b-431a-9859-21045f83f0a0',
      'data-cbid': '7498452c-872b-431a-9859-21045f83f0a0',
      'data-blockingmode': 'auto',
      id: 'Cookiebot'
    },
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css',
  ],
  customFields: {
    trackerApplicationId: (environment === 'prod') ? 'objectiv-website' : 'objectiv-website-dev',
    trackerDocsApplicationId: (environment === 'prod') ? 'objectiv-docs' : 'objectiv-docs-dev',
    trackerEndPoint: (environment === 'prod') ? 'https://collector.objectiv.io' : 'http://localhost:5000',
    slackJoinLink: slackJoinLink,
    emailJsUserId: 'user_uD6x4OVJwk9gqRX4DKU6k',
    trackerConsoleEnabled: environment !== 'prod'
  }
};

console.log("USING OBJECTIV TRACKER ENDPOINT:", module.exports.customFields.trackerEndPoint);