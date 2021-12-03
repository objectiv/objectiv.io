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
const baseUrl = '/';
const trackerApplicationId = isProductionEnv ? (isStagingEnv? 'objectiv-website-staging' : 'objectiv-website') : 'objectiv-website-dev';
const trackerEndPoint = (isProductionEnv) ? 'https://collector.objectiv.io' : 'http://localhost:5000';
const trackerConsoleEnabled = !isProductionEnv;
const postBuildPlugin = !isStagingEnv ? path.resolve(__dirname, 'src/plugins/post-build/') : (function noPlugin() { return null });

const slackJoinLink = 'https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Objectiv - creating the ultimate workflow for data scientists',
  titleDelimiter: '|',
  tagline: 'A data collection & modeling library that puts the data scientist first.', //meta description, and og:description
  baseUrl: baseUrl,
  url: websiteUrl,
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
        docs: false,
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],
  plugins: [
    path.resolve(__dirname, 'src/plugins/favicons/'),
    postBuildPlugin,
    require.resolve('docusaurus-plugin-image-zoom')
  ],
  scripts: [
    {
      src: 'https://consent.cookiebot.com/uc.js?cbid=7498452c-872b-431a-9859-21045f83f0a0',
      'data-cbid': '7498452c-872b-431a-9859-21045f83f0a0',
      'data-blockingmode': 'auto',
      id: 'Cookiebot'
    },
  ],
  customFields: {
    trackerApplicationId: trackerApplicationId,
    trackerEndPoint: trackerEndPoint,
    slackJoinLink: slackJoinLink,
    trackerConsoleEnabled: trackerConsoleEnabled
  },

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
          label: 'Docs',
          to: websiteUrl + '/docs', // ensure Docusaurus redirects to standalone docs
          target: '_self'
        },
        {
          to: 'about',
          label: 'About Us',
        },
        {
          href: 'https://github.com/objectiv/objectiv-analytics',
          label: 'GitHub',
          position: 'right',
          className: 'navItem navGitHub',
        },
        {
          href: slackJoinLink,
          label: 'Slack',
          position: 'right',
          className: 'navItem navSlack',
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
    zoom: {
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    }    
  })
};

module.exports = config;

console.log("OBJECTIV TRACKER APPLICATION ID:", config.customFields.trackerApplicationId);
console.log("OBJECTIV TRACKER ENDPOINT:", config.customFields.trackerEndPoint);
console.log("DOCUSAURUS URL:", config.baseUrl);
console.log("DOCUSAURUS BASEURL:", config.baseUrl);
