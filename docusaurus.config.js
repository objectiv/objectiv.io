/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  baseUrl: '/',
  favicon: 'img/favicon-300x300.png',
  title: 'Objectiv',
  tagline: 'We\'re building a product analytics pipeline for generic & reusable modelling',
  url: 'https://objectiv.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'objectiv', // Usually your GitHub org/user name.
  projectName: 'objectiv.io', // Usually your repo name.

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    sidebarCollapsible: true,
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Objectiv Logo',
        src: 'img/logo-dark.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'blog', 
          label: 'Blog', 
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
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/objectiv',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/objectivhq',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
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
        docs: {
          path: 'docs',
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./docs/sidebars.js'),
          editUrl:
            'https://github.com/objectiv/objectiv.io/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/objectiv/objectiv.io/edit/master/blog/',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
    [
      'redocusaurus',
      {
        //https://github.com/rohit-gohri/redocusaurus/tree/main/packages/docusaurus-plugin-redoc
        specs: [{
          specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
          routePath: '/docs/api/',
          layout: {
            title: "Objectiv API docs",
            description: "The API docs for Objectiv",
          }
        }],
        //https://github.com/rohit-gohri/redocusaurus/tree/main/packages/docusaurus-theme-redoc
        theme: {
        }
      }
    ],
  ],
};
