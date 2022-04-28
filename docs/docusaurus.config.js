// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');

const objectivEnvironment = process.env.OBJECTIV_ENVIRONMENT ?? 'development';
const getEnvConfig = require('../env_config.js');
const envConfig = getEnvConfig(objectivEnvironment);

const slackJoinLink = envConfig.websiteUrl + '/join-slack';

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: "Documentation",
  titleDelimiter: '|',
  tagline: 'Objectiv is product analytics infrastructure with a generic event taxonomy. Capture validated user behavior data straight into your data warehouse, and speed up product analytics projects with pre-built and reusable models.', //meta description, and og:description
  url: envConfig.websiteUrl,
  baseUrl: envConfig.baseUrl,
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'objectiv', // Usually your GitHub org/user name.
  projectName: 'objectiv.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // undefined it the default behaviour of docusaurus, and leaves it alone
  // see: https://docusaurus.io/docs/api/docusaurus-config#trailing-slash for more info
  trailingSlash: undefined,

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
          breadcrumbs: true,  // enabled in beta.17
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
      'data-blockingmode': 'manual',
      id: 'Cookiebot'
    },
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css',
  ],
  customFields: {
    trackerDocsApplicationId: envConfig.trackerApplicationId,
    trackerEndPoint: envConfig.trackerEndPoint,
    slackJoinLink: slackJoinLink,
    trackerConsoleEnabled: envConfig.trackerConsoleEnabled === 'true'
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{
          property: 'og:image', content: 'https://objectiv.io/img/open-graph/objectiv-og-large.png'
        },
        {
          property: 'robots', content: 'all'
        }
      ],
      navbar: {
        title: '',
        logo: {
          alt: 'Objectiv Documentation Logo',
          src: '/img/logo-objectiv-docs-white.svg',
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
            href: 'https://github.com/objectiv/objectiv-analytics',
            label: 'GitHub',
            position: 'right',
            className: 'navItem navGitHub',
            target: '_self',
          },
          {
            href: slackJoinLink,
            label: 'Slack',
            position: 'right',
            className: 'navItem navSlack',
            target: '_self',
          },
          {
            href: 'https://twitter.com/objectiv_io',
            label: 'Twitter',
            position: 'right',
            className: 'navItem navTwitter',
            target: '_self',
          },  
          {
            label: 'Objectiv.io',
            position: 'right',
            to: envConfig.websiteUrl,
            target: '_self',
            className: 'navItem navHomepage',
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
                to: envConfig.websiteUrl + '/privacy/'
              },
              {
                label: 'Cookies',
                to: envConfig.websiteUrl + '/privacy/cookies/'
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
        container: 'main',
        contextualSearch: true,
        searchParameters: {
          optionalWords: ['react', 'react native', 'angular', 'browser'],
          optionalFilters: [
            'section:tracking<score=3>',
            'section:modeling<score=2>',
            'section:taxonomy<score=1>',
          ],        
        },
      },
    }),
};

module.exports = config;

console.log("OBJECTIV TRACKER APPLICATION ID:", config.customFields.trackerDocsApplicationId);
console.log("OBJECTIV TRACKER ENDPOINT:", config.customFields.trackerEndPoint);
console.log("OBJECTIV TRACKER CONSOLE ENABLED:", config.customFields.trackerConsoleEnabled);
console.log("DOCUSAURUS URL:", config.baseUrl);
console.log("DOCUSAURUS BASEURL:", config.baseUrl);
