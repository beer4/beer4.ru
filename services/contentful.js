const contentful = require("contentful");

const space = process.env.CONTENTFUL_SPACE_ID || '';
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || '';

const contentfulClient = space && accessToken ? contentful.createClient({
  space,
  accessToken
}) : undefined;

export default contentfulClient;
