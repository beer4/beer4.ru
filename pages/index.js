import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

// Helpers
import contentfulClient from '../helpers/contentful';

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
      спиртные напитки! Всё это - постирония, иф ю ноу, вот ай мин!"
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

// TODO: Remove this example and get logic to the hooks
Home.getInitialProps = async () => {
  // TODO: And remove this hard code
  const eventEntry = '5nE3VQ8xub8mWhZSbqEJNw';
  const data = (await contentfulClient.getEntry(eventEntry)).fields;
  /**
   * Responsed data fields:
   * title, date, place, location, image, photos, url
   * */
  const { date, place, location } = data;
  console.log(data);
  return {
    date,
    place,
    location,
  };
};

Home.propTypes = {
  date: PropTypes.string,
  place: PropTypes.string,
  location: PropTypes.instanceOf(Object),
};

Home.defaultProps = {
  date: String(new Date()),
  place: 'Полевая 55, Бар "Шишкин"',
  location: { lon: 50.125682186508165, lat: 53.20326855803267 },
};

export default Home;
