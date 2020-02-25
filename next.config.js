require("dotenv").config();

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  exportTrailingSlash: true,
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  exportPathMap: () => ({
    "/": { page: "/" }
  })
};
