import React from 'react';
import Head from 'next/head';

// Components
import ImageContainer from '../components/ImageContainer';
import Information from '../components/Information';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Disclaimer from '../components/Disclaimer';

const Home = () => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Пивной Четверг</title>
      <link rel="shortcut icon" href="/beer4_favicon.ico" type="image/x-icon" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>

    <div className="main-container">
      <ImageContainer>
        <img className="img--main" src="/beer4_main.svg" alt="Пивной Четверг" />
      </ImageContainer>
      <Information
        text="Пивной Четверг - это еженедельнейшая Самарская IT-конференция в одном из
        баров в районе центра, которая проходит каждый четверг и на которой все
        пьют пиво и разговаривают"
      />
      <Button
        url="https://t.me/joinchat/Ew15LEePsg6RSO40ebtFrg"
        text="Вот наш чат в телеграмме"
      />
      <Information
        text="Следующий пивной четверг будет проходить в четверг, в баре “Шишкин”, на
        полевой 26, с 7 часов вечера"
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

    <style jsx global>{`
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
    `}</style>

    <style jsx>{`
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
    `}</style>
  </div>
);

export default Home;
