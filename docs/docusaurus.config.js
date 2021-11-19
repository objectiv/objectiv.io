// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');

const nodeEnv = process.env.NODE_ENV;
const isProductionEnv = nodeEnv ? nodeEnv.startsWith('prod') : false;
const objectivEnvironment = process.env.OBJECTIV_ENVIRONMENT;
const isStagingEnv = objectivEnvironment ? (isProductionEnv && objectivEnvironment.startsWith('staging')) : false;
const websiteUrl = isStagingEnv ? 'https://staging.objectiv.io/' : 'https://objectiv.io/';
if (!isProductionEnv && !objectivEnvironment.startsWith('dev')) {
  console.error("WARNING: Running in development mode, but OBJECTIV_ENVIRONMENT is set to '" 
    + objectivEnvironment + "'")
}

const slackJoinLink = 'https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg';

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Objectiv Docs - creating the ultimate workflow for data scientists',
  titleDelimiter: '|',
  tagline: 'Objectiv is a data collection & modeling library that puts the data scientist first.',
  url: websiteUrl,
  baseUrl: (isProductionEnv) ? '/docs/' : '/',
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
    trackerDocsApplicationId: isProductionEnv ? (isStagingEnv? 'objectiv-docs-staging' : 'objectiv-docs') : 'objectiv-docs-dev',
    trackerEndPoint: (isProductionEnv) ? 'https://collector.objectiv.io' : 'http://localhost:5000',
    slackJoinLink: slackJoinLink,
    trackerConsoleEnabled: !isProductionEnv
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
                to: websiteUrl + '/privacy'
              },
              {
                label: 'Cookies',
                to: websiteUrl + '/privacy/cookies'
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
      }
    }),
};

module.exports = config;

console.log("OBJECTIV TRACKER APPLICATION ID:", config.customFields.trackerDocsApplicationId);
console.log("OBJECTIV TRACKER ENDPOINT:", config.customFields.trackerEndPoint);
console.log("DOCUSAURUS URL:", config.baseUrl);
console.log("DOCUSAURUS BASEURL:", config.baseUrl);
