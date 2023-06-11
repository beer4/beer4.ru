import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

// Helpers
import contentfulClient from '../services/contentful';

// Components
import ImageContainer from '../components/ImageContainer';
import Information from '../components/Information';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Disclaimer from '../components/Disclaimer';
import UpcomingEventInformation from '../components/UpcomingEventInformation';

const Home = props => {
  const { date, place, location } = props;

  const telegramLink = 'https://t.me/joinchat/Ew15LEePsg6RSO40ebtFrg';

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Пивной Четверг</title>
        <link
          rel="shortcut icon"
          href="/beer4_favicon.ico"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Beer4" />
        <meta property="og:url" content="https://beer4.ru" />
        <meta property="og:image" content="https://beer4.ru/beer4_main.png" />
      </Head>

      <div className="main-container">
        <ImageContainer>
          <img
            className="img--main"
            src="/beer4_main.svg"
            alt="Пивной Четверг"
          />
        </ImageContainer>
        <Information
          text="Пивной Четверг - это еженедельнейшая Самарская IT-конференция в одном из
        баров в районе центра, которая проходит раз в две недели, в какой-то четверг, и на которой все
        пьют пиво и разговаривают"
        />
        <Button url={telegramLink} text="Вот наш чат в телеграме" />
        <UpcomingEventInformation
          date={date}
          place={place}
          location={location}
        />
        <ImageContainer>
          <img
            className="img--footer"
            src="/beer4_footer.svg"
            alt="Пивной Четверг"
          />
        </ImageContainer>
        <Footer />
        <Disclaimer
          text="Мы никого ни к чему не призываем, тем более не агитируем употреблять
      спиртные напитки! Всё это - постирония, ю ноу, блин?"
        />
      </div>

      <style jsx global>
        {`
          body {
            background-color: #6636ee;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 900;
            line-height: 35px;
            text-align: center;
            letter-spacing: 0.19em;
            text-transform: uppercase;
            color: white;
          }
        `}
      </style>

      <style jsx>
        {`
          .main-container {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 980px;
            margin: auto;
          }
          .img--main {
            max-width: 540px;
          }
          .img--footer {
            max-width: 180px;
          }
        `}
      </style>
    </div>
  );
};

Home.getInitialProps = async () => {
  if (contentfulClient) {
    const data = await contentfulClient.getEntries({
      content_type: 'event',
      order: 'sys.createdAt',
    });
    const event = data.items.pop().fields;
    const { date, place, location } = event;
    return {
      date,
      place,
      location,
    };
  }
  return {};
};

Home.propTypes = {
  date: PropTypes.string,
  place: PropTypes.string,
  location: PropTypes.string
};

Home.defaultProps = {
  date: String(new Date()),
  place: 'Самара, Самарская 188А, "Бутылист"',
  location: 'https://yandex.ru/maps/-/CCU1ZQrwkD'
};

export default Home;
