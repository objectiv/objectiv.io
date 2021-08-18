/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path');
const remarkFootnotes = require('remark-footnotes'); // https://github.com/remarkjs/remark-footnotes
const remarkGitHub = require('remark-github'); // https://github.com/remarkjs/remark-github
const remarkLicense = require('remark-license'); // https://github.com/remarkjs/remark-license
const remarkLint = require('remark-lint'); // https://github.com/remarkjs/remark-lint
const environment = process.env.OBJECTIV_ENVIRONMENT;
const objectiv_tracker_endpoint = (environment == 'dev') ? 'http://localhost:5000' : 'https://collector.objectiv.io';
console.log("USING OBJECTIV TRACKER ENDPOINT:", objectiv_tracker_endpoint);
// TBD: https://github.com/rehypejs/rehype-meta

module.exports = {
  baseUrl: (environment == 'staging') ? '/staging/' : '/',
  url: (environment == 'staging') ? 'https://objectiv.io/staging/' : 'https://objectiv.io/',
  favicon: 'img/favicon/favicon.ico',
  title: 'Objectiv - creating the ultimate iterative workflow for data scientists',
  titleDelimiter: '|',
  tagline: 'Build & orchestrate reusable, stackable and interchangeable models that embrace a standardized ' 
    + ' event taxonomy. Straight from your Jupyter notebook.', //meta description, and og:description
  organizationName: 'objectiv', // Usually your GitHub org/user name.
  projectName: 'objectiv.io', // Usually your repo name.

  trailingSlash: false,
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'throw',
  
  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig: {
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
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          path: 'docs',
          routeBasePath: '/docs',
          sidebarCollapsible: true,
          sidebarPath: require.resolve('./docs/sidebars.js'),
          editUrl:
            'https://github.com/objectiv/objectiv.io/edit/master/docs/',
          remarkPlugins: [
            [remarkGitHub, {repository: 'https://github.com/objectiv/objectiv.io'}],
            [remarkLicense, {name: 'Objectiv', license: 'MIT', url: 'https://objectiv.io'}],
            [remarkFootnotes, {inlineNotes: true}],
            [remarkLint, {plugins: ['remark-preset-lint-recommended', 'remark-preset-lint-markdown-style-guide']}],
          ],
        },
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
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
    emailJsUserId: 'user_uD6x4OVJwk9gqRX4DKU6k',
    trackerApplicationId: 'objectiv-website',
    trackerDocsApplicationId: 'objectiv-docs',
    trackerEndPoint: objectiv_tracker_endpoint
  }
};