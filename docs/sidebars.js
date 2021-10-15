module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'home',
      label: 'Home',
    },
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'BuhTuh',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'buhtuh', // Generate sidebar slice from docs/buhtuh
        },
      ]
    },
  ],
};
