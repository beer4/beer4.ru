const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
};
