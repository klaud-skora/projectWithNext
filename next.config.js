const fetch = require('isomorphic-unfetch');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/test': { page: '/test' },
      '/test/siemanko': { page: '/siemanko' }
    };

    return paths;
  }
};