import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID || '';
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || '';

const contentfulClient =
  space && accessToken
    ? createClient({
        space,
        accessToken,
      })
    : undefined;

const getData = async (): Promise<{ date: Date; place: string; location: string }> => {
  if (contentfulClient) {
    const data = await contentfulClient.getEntries({
      content_type: 'beer4',
      order: 'sys.createdAt',
    });

    const event: any | undefined = data.items.pop()?.fields;
    if (event) {
      const { date, place, location } = event;

      return {
        date: new Date(date),
        place,
        location,
      };
    }
  }

  return {
    date: new Date(),
    place: 'Самара, Самарская 188А, "Бутылист"',
    location: 'https://yandex.ru/maps/-/CCU1ZQrwkD',
  };
};

export { getData };
