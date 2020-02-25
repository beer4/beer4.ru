const contentful = require("contentful");

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

export default contentful.createClient({
  space,
  accessToken
});
