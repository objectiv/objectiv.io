// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');

const objectivEnvironment = process.env.OBJECTIV_ENVIRONMENT ?? 'development';
const nodeEnv = process.env.NODE_ENV;
// only allow yarn start (dev) in dev mode
if (nodeEnv === 'development' && objectivEnvironment !== 'development'){
  throw new Error(`Not allowed to use 'yarn start' on non dev build (OBJECTIV_ENVIRONMENT=${process.env.OBJECTIV_ENVIRONMENT})`);
}
const isProductionEnv = nodeEnv ? nodeEnv.startsWith('prod') : false;
const isStagingEnv = objectivEnvironment ? (objectivEnvironment.startsWith('staging')) : false;
const websiteUrl = isStagingEnv ? 'https://staging.objectiv.io' : 'https://objectiv.io';
const baseUrl = (isProductionEnv) ? '/docs/' : '/';
const trackerApplicationId = isProductionEnv ? (isStagingEnv? 'objectiv-docs-staging' : 'objectiv-docs') : 'objectiv-docs-dev';
const trackerEndPoint = (isProductionEnv) ? 'https://collector.objectiv.io' : 'http://localhost:5000';
const trackerConsoleEnabled = !isProductionEnv;

const slackJoinLink = 'https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg';

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Objectiv Docs - creating the ultimate workflow for data scientists',
  titleDelimiter: '|',
  tagline: 'Objectiv is a data collection & modeling library that puts the data scientist first.',
  url: websiteUrl,
  baseUrl: baseUrl,
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'objectiv', // Usually your GitHub org/user name.
  projectName: 'objectiv.io', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: true,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          path: './docs',
          editUrl: 'https://github.com/objectiv/objectiv.io/edit/main/docs/',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false
        },
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      })
    ],
  ],
  plugins: [
    path.resolve(__dirname, 'src/plugins/favicons/'),
    path.resolve(__dirname, 'src/plugins/post-build/')
  ],
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
    trackerDocsApplicationId: trackerApplicationId,
    trackerEndPoint: trackerEndPoint,
    slackJoinLink: slackJoinLink,
    trackerConsoleEnabled: trackerConsoleEnabled
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Objectiv Documentation Logo',
          src: '/img/logo-objectiv-docs.svg',
        },
        items: [
          {
            label: 'Tracking',
            to: '/tracking/',
          },
          {
            label: 'Modeling',
            to: '/modeling/',
          },
          {
            label: 'Taxonomy',
            to: '/taxonomy/',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Objectiv.io \u{1F855}',
            position: 'right',
            to: websiteUrl,
            target: '_self',
          }
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
                to: websiteUrl + '/privacy/'
              },
              {
                label: 'Cookies',
                to: websiteUrl + '/privacy/cookies/'
              },
            ],
          },
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: true
      },
      algolia: {
        appId: 'P9B1J55TMB',
          // Public API key, safe to commit
        apiKey: '57e02ab0593f5338e36b7bff8235a505',
        indexName: 'objectiv',
        container: 'main'
      },
    }),
};

module.exports = config;

console.log("OBJECTIV TRACKER APPLICATION ID:", config.customFields.trackerDocsApplicationId);
console.log("OBJECTIV TRACKER ENDPOINT:", config.customFields.trackerEndPoint);
console.log("DOCUSAURUS URL:", config.baseUrl);
console.log("DOCUSAURUS BASEURL:", config.baseUrl);
