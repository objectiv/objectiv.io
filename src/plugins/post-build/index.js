const fs = require('fs');
const path = require('path');

module.exports = function (context, { skip }) {
  if (skip) {
    return;
  }
  return {
    name: 'add-htaccess',
    async postBuild({siteConfig = {}, routesPaths = [], outDir}) {
      // copy .htaccess from root to ./build
      // destination will be created or overwritten by default.
      fs.copyFile('.htaccess', path.join('build', '.htaccess'), (err) => {
        if (err) throw err;
        console.log('.htaccess file was copied to the build directory');
      });
    },
  };
};
