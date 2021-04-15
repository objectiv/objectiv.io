module.exports = function (context, options) {
  // ...
  return {
    name: 'favicons-plugin',
    async loadContent() {
      /* ... */
    },
    async contentLoaded({content, actions}) {
      /* ... */
    },
    /* other lifecycle API */
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/img/favicon/apple-touch-icon.png',
            },
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: '/img/favicon/favicon-32x32.png',
            },
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: '/img/favicon/favicon-16x16.png',
            },
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'manifest',
              href: '/img/favicon/site.webmanifest',
            },
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'mask-icon',
              href: '/img/favicon/safari-pinned-tab.svg',
              color: '#5bbad5',
            },
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'apple-mobile-web-app-title',
              content: 'Objectiv',
            },
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'application-name',
              content: 'Objectiv',
            },
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'msapplication-TileColor',
              content: '#00aba9',
            },
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'theme-color',
              content: '#ffffff',
            },
          },
        ],
      };
    },
  };
};
